// Java: Exception
// JavaScript: Error
// const array = new Array(100000000000000000);

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === "not exist!๐ฉ") {
    throw new Error(`file not exist! ${fileName}`);
  }
  return "file contents๐";
}

function closeFile(fileName: string) {
  //
}
function run() {
  const fileName = "not exist!๐ฉ";

  try {
    // ์๋ฌ๊ฐ ๋ฐ์ํ  ์ ์๋ ๋ถ๋ถ์  try๋ก ๊ฐ์ผ๋ค.
    console.log(readFile(fileName));
  } catch (error) {
    //catch๋ก ์ก์ผ๋ฉด ์ดํ๋ฆฌ์ผ์ด์์ด ์ฃฝ์ง๋ ์๋๋ค.
    console.log(`catched!!`);
    return;
  } finally {
    closeFile(fileName);
    console.log(`closed!`);
  }
}
run();
