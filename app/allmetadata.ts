// app/allmetadata.ts
import { metadata as machinelearningMetadata } from "./machine_learning/metadata";
import { metadata as linearalgebraMetadata } from "./linear_algebra/metadata";
import { metadata as calculusMetadata } from "./calculus/metadata";
import { MetadataCollection } from "@/types/metadata";

export const metadata: MetadataCollection = {
  ...machinelearningMetadata,
  ...linearalgebraMetadata,
  ...calculusMetadata,
};
