import {
  createResource as cSource,
  unstable_createResource
} from "react-cache";

let createResource;

if (unstable_createResource) {
  createResource = unstable_createResource;
} else {
  createResource = cSource;
}

export { createResource };
