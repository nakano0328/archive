import style1 from "./test1.module.css";
import style2 from "./test2.module.css";
import "@/app/test/csstest/test3.css";
import GoogleForm from "@/app/components/GoogleForm";
import GoogleComments from "@/app/components/GoogleComments";

export default function Page() {
  return (
    <>
      <h1>CSS Test</h1>
      <div className={style1.test1}>Test1 message.</div>
      <div className={style2.test2}>Test2 message.</div>

      <br />
      <hr />
      <br />
      <h1>コメントフォーム</h1>
      <GoogleForm />

      <br />
      <hr />
      <br />

      <GoogleComments />
    </>
  );
}
