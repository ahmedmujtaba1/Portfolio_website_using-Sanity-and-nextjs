import { createClient } from 'next-sanity'
// import { type ClientConfig } from "@sanity/client";

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

export default client;
