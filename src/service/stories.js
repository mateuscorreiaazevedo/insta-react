import { getService } from "./base"

export class StoriesService {
  static async load () {
    return getService("/stories")
  }
}


export async function loadStoriesService() {
  return getService("/stories")
}
