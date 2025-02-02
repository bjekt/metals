# Architecture of Metals

This document describes the high-level architecture of Metals following the philosophy of [rust-analyzer's ARCHITECTURE.md](https://matklad.github.io/2021/02/06/ARCHITECTURE.md.html)

## Other resources

- For the general contributing guidelines, see [Getting started guide for contributors](https://scalameta.org/metals/docs/contributors/getting-started/).
- If you're interested in the overview of how Metals works, [A Dive into how Metals works](https://youtu.be/fpzN_vTBy18) video will be helpful.
- For LSP specification, please refer [the LSP document](https://microsoft.github.io/language-server-protocol/), you don't have to read all of the `specification`, just read the `overview` and pick out the interesting parts when you need it.

## Language Server

`MetalsLanguageServer.scala` is an entrypoint to Metals. This class is responsible for handling LSP [lifecycle messages](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#lifeCycleMessages). Upon receiving initialize request, an instance of `MetalsLspService.scala` which is responsible for handling other LSP requests.

## LSP endpoints

The most important file of this project is `MetalsLspService.scala`. In this file, we implement all of the LSP endpoints. All endpoints we use are defined in the `scala.meta.metals.lsp` package in 3 files:

- `WorkspaceService.scala`
- `TextDocumentService.scala`
- `MetalsService.scala`

For example, you will find the endpoint for `textDocument/completion` request in `TextDocumentService`.

```scala
@JsonRequest("textDocument/completion")
def completion(...) = ...
```

Such endpoint is then implemented by `MetalsLspService`.

In addition to the implementation of LSP endpoints, this file creates and manages many components, for instance:

- `private val compilers: Compilers = ...`
- `private val codeLensProvider: CodeLensProvider = ...`
- `private val diagnostics: Diagnostics = ...`

Hacking in Metals usually starts with recognizing in which component one has to make a change to get something woorking.

## Presentation compiler

Metals features are powered by presentation compilers, if you hit `Compilers.scala` it is the client of compilers.

`mtags` module is the Scala version specific module used to interact with the Scala presentation compiler using Java defined interfaces. You can find the interfaces under `mtags-interface` project.

For example, `ScalaPresentationCompiler.java` in `mtags-interface` is the interface for `ScalaPresentationCompiler.scala` under `scala-2` and `scala-3` directories of `mtags` module.

For more details

- [An introduction to the Scala presentation compiler](https://www.chris-kipp.io/blog/an-intro-to-the-scala-presentation-compiler)
- Presentation compilers' endpoint, which are the class from the compiler jar that Metals uses.
  - Scala3 `InteractiveDriver.scala` and `Interactive.scala` in [lampepfl/dotty](https://github.com/lampepfl/dotty)
  - Scala2: `interactive/Global.scala` in [scala/scala](https://github.com/scala/scala)

## SemanticDB

Metals uses [semanticdb](https://scalameta.org/docs/semanticdb/guide.html) for many features (Providers that receive the instance of `Semanticdbs`) such as references and renames. Semanticdb offers us information from the compiler that are written to disk and easily consumable. Metals consumes SemanticDBs in two ways:

- `FileSystemsSemanticdbs` consumes SemanticDBs on disks
  - Semanticdb will be generated by the build servers to disk, see https://scalameta.org/metals/docs/integrations/new-build-tool#enable-semanticdb
- `InteractiveSemanticdbs` will generate SemanticDB on the fly using the presentation compiler via `mtags`, in case `FileSystemsSemanticdbs` failed or when the build tool doesn't compiler specific files such as dependency sources or sbt files.

In addition, classes extend `SemanticdbFeatureProvider` index the semanticdb symbols, that will be updated by `SemanticdbIndexer`.

## Build Server

Metals communicates with build server such as `bloop` and `sbt` using [Build Server Protocol](https://build-server-protocol.github.io/).

`BspConnector.scala` manages the connections between Metals and build server, and `BuildServerConnection.scala` represents the API wrapper for the build server.

For more details about sbt's BSP support in Metals, see [the blog post](https://scalameta.org/metals/blog/2020/11/06/sbt-BSP-support/).

## Worksheet

Worksheet support is provided by [mdoc](https://github.com/scalameta/mdoc), which is able to typecheck and evaluate each line of the input. The main class responsible for worksheets is [WorksheetProvider.scala](https://github.com/scalameta/metals/blob/main/metals/src/main/scala/scala/meta/internal/worksheets/WorksheetProvider.scala). It is responsible for downloading mdoc instance for each Scala version that is supported and running the evaluation in the file input.

Later the evaluations are published using [decoration extension](https://scalameta.org/metals/docs/integrations/decoration-protocol) or via additional Text Edits for editors that do not support decorations. This is done in the two classes implementing [WorksheetPublisher.scala](https://github.com/scalameta/metals/blob/main/metals/src/main/scala/scala/meta/internal/worksheets/WorksheetPublisher.scala):

- [DecorationWorksheetPublisher.scala](https://github.com/scalameta/metals/blob/main/metals/src/main/scala/scala/meta/internal/worksheets/DecorationWorksheetPublisher.scala) for decoration publishing
- [WorkspaceEditWorksheetPublisher.scala](https://github.com/scalameta/metals/blob/main/metals/src/main/scala/scala/meta/internal/worksheets/WorkspaceEditWorksheetPublisher.scala) for publishing decorations as comments in the code

## Formatting

`FormattingProvider.scala` takes care of how Metals handles `textDocument/formatting`. It uses [scalafmt](https://github.com/scalameta/scalafmt) as a code formatter downloading dynamically using `scalafmt-dynamic`.
We don't embed a specific version of scalafmt into Metals so that users can switch scalafmt's version using `.scalafmt.conf`.

Note that `FormattingProvider` doesn't handle `textDocument/rangeFormatting`.

## Scalafix

Scalafix support is implemented in the [ScalafixProvider.scala](https://github.com/scalameta/metals/blob/main/metals/src/main/scala/scala/meta/internal/metals/ScalafixProvider.scala). The class uses scalafix API `scalafix.interfaces.Scalafix` to run the rules and get text edits, which are later changed to LSP TextEdits and applied to the file using WorkspaceEdit.

Metals downloads separate version of Scalafix for each binary version of Scala. It can also download additional dependencies for each of the used rules.

## Debbugging

Debugging is handled by Debug Adapter Protocol, which is a complementary protocol to LSP.

The main code for debugging resides in `scala.meta.internal.metals.debug` package with [DebugProvider.scala](https://github.com/scalameta/metals/blob/main/metals/src/main/scala/scala/meta/internal/metals/debug/DebugProvider.scala) being the main entrypoint.

DebugProvider sets up the communication between the debug server process started by the build server and the client. This communication is handled in [DebugProxy.scala](https://github.com/scalameta/metals/blob/main/metals/src/main/scala/scala/meta/internal/metals/debug/DebugProxy.scala) which translates some of the messages in order to enrich them with the information from Metals itself.

You can find more information about DAP [here](https://github.com/scalacenter/bloop/blob/main/docs/debug-adapter.md)
