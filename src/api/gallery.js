// API for gallery
import RequestHelper from "../helpers/request.helper";
import AppConfig from "../config";
import MockData from "../helpers/mock-data";

const MEDIA_TYPES = {
  DOCUMENT: "Document",
  IMAGE: "Image",
  VIDEO: "Video"
};

export default class GalleryAPI {
  /**
   * Media types include:
   * - Document
   * - Image
   * - Video
   * Example: /api/Event/ca301f67-7b95-4c97-8013-19b5f15ad78e/Media/Document
   */
  static async getMediasByType (eventId, mediaType) {
    // const data = await RequestHelper.get(`${AppConfig.apiUrl}Event/${eventId}/Media/${mediaType}`, {
    //   skip: 0,
    //   take: 100
    // });
    // return data;
    if (MEDIA_TYPES.DOCUMENT === mediaType) {
      return MockData.mediaDocuments;
    }
    if (MEDIA_TYPES.IMAGE === mediaType) {
      return MockData.mediaImages;
    }
    if (MEDIA_TYPES.VIDEO === mediaType) {
      return MockData.mediaVideos;
    }
    return [];
  }
}