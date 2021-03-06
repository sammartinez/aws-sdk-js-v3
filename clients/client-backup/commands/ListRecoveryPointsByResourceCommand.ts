import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { ListRecoveryPointsByResourceInput, ListRecoveryPointsByResourceOutput } from "../models/models_0";
import {
  deserializeAws_restJson1ListRecoveryPointsByResourceCommand,
  serializeAws_restJson1ListRecoveryPointsByResourceCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type ListRecoveryPointsByResourceCommandInput = ListRecoveryPointsByResourceInput;
export type ListRecoveryPointsByResourceCommandOutput = ListRecoveryPointsByResourceOutput & __MetadataBearer;

export class ListRecoveryPointsByResourceCommand extends $Command<
  ListRecoveryPointsByResourceCommandInput,
  ListRecoveryPointsByResourceCommandOutput,
  BackupClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListRecoveryPointsByResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRecoveryPointsByResourceCommandInput, ListRecoveryPointsByResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ListRecoveryPointsByResourceInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListRecoveryPointsByResourceOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListRecoveryPointsByResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListRecoveryPointsByResourceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListRecoveryPointsByResourceCommandOutput> {
    return deserializeAws_restJson1ListRecoveryPointsByResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
