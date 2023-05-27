function execute() {
  return Response.success([
    {
      title: "Truyện đọc nhiều",
      input: "https://truyenhoangdung.xyz/danh-muc/bang-xep-hang",
      script: "listRank.js",
    },
  ]);
}
