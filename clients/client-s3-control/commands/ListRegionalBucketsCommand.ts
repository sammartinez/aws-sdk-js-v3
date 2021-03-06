import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { ListRegionalBucketsRequest, ListRegionalBucketsResult } from "../models/models_0";
import {
  deserializeAws_restXmlListRegionalBucketsCommand,
  serializeAws_restXmlListRegionalBucketsCommand,
} from "../protocols/Aws_restXml";
import { getRedirectFromPostIdPlugin } from "@aws-sdk/middleware-sdk-s3-control";
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

export type ListRegionalBucketsCommandInput = ListRegionalBucketsRequest;
export type ListRegionalBucketsCommandOutput = ListRegionalBucketsResult & __MetadataBearer;

export class ListRegionalBucketsCommand extends $Command<
  ListRegionalBucketsCommandInput,
  ListRegionalBucketsCommandOutput,
  S3ControlClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListRegionalBucketsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ControlClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRegionalBucketsCommandInput, ListRegionalBucketsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getRedirectFromPostIdPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ListRegionalBucketsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListRegionalBucketsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListRegionalBucketsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlListRegionalBucketsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRegionalBucketsCommandOutput> {
    return deserializeAws_restXmlListRegionalBucketsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
