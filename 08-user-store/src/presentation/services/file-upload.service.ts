export class FileUploadService {
  constructor() {}

  private checkFolder() {
    throw new Error("Not implementes");
  }

  uploadSingle(
    file: ???,
    folder: string = "uploads",
    validExtensions: string[] = ["png", "jpg", "jepg", "gif"]
  ) {}
  uploadMultiple(
    file: ???,
    folder: string = "uploads",
    validExtensions: string[] = ["png", "jpg", "jepg", "gif"]
  ) {}
}
