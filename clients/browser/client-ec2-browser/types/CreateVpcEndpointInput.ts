import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the parameters for CreateVpcEndpoint.</p>
 */
export interface CreateVpcEndpointInput {
  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The type of endpoint.</p> <p>Default: Gateway</p>
   */
  VpcEndpointType?: "Interface" | "Gateway" | string;

  /**
   * <p>The ID of the VPC in which the endpoint will be used.</p>
   */
  VpcId: string;

  /**
   * <p>The service name. To get a list of available services, use the <a>DescribeVpcEndpointServices</a> request, or get the name from the service provider.</p>
   */
  ServiceName: string;

  /**
   * <p>A policy to attach to the endpoint that controls access to the service. The policy must be in valid JSON format. If this parameter is not specified, we attach a default policy that allows full access to the service.</p>
   */
  PolicyDocument?: string;

  /**
   * <p>(Gateway endpoint) One or more route table IDs.</p>
   */
  RouteTableIds?: Array<string> | Iterable<string>;

  /**
   * <p>(Interface endpoint) The ID of one or more subnets in which to create an endpoint network interface.</p>
   */
  SubnetIds?: Array<string> | Iterable<string>;

  /**
   * <p>(Interface endpoint) The ID of one or more security groups to associate with the endpoint network interface.</p>
   */
  SecurityGroupIds?: Array<string> | Iterable<string>;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to Ensure Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>(Interface endpoint) Indicate whether to associate a private hosted zone with the specified VPC. The private hosted zone contains a record set for the default public DNS name for the service for the Region (for example, <code>kinesis.us-east-1.amazonaws.com</code>) which resolves to the private IP addresses of the endpoint network interfaces in the VPC. This enables you to make requests to the default public DNS name for the service instead of the public DNS names that are automatically generated by the VPC endpoint service.</p> <p>To use a private hosted zone, you must set the following VPC attributes to <code>true</code>: <code>enableDnsHostnames</code> and <code>enableDnsSupport</code>. Use <a>ModifyVpcAttribute</a> to set the VPC attributes.</p> <p>Default: <code>true</code> </p>
   */
  PrivateDnsEnabled?: boolean;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}