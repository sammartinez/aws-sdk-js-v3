import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateIntentVersionInput: _Structure_ = {
  type: "structure",
  required: ["name"],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "name"
    },
    checksum: {
      shape: {
        type: "string"
      }
    }
  }
};