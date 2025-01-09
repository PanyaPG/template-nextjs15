"use client";
import { Card, Divider, Form, FormProps, theme, Typography } from "antd";
import { observer } from "mobx-react";
import { useRouter } from "next/navigation";
import { useDictionary } from "../../../../i18n/dictionaryContext";
import { Path } from "../../../../types/path.enum";
import appViewModel from "../../app.viewmodel";
import FormLogin from "../components/FormLogin";
import { FieldType } from "../interface";

const LoginPage = () => {
  const router = useRouter();
  const [form] = Form.useForm<FieldType>();
  const { colorPrimary } = theme.useToken().token;
  const dictionary = useDictionary();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    appViewModel.isPassLogin = true;
    router.push(Path.Home);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      style={{
        width: "100dvw",
        height: "100dvh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        style={{
          width: "500px",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
        }}
      >
        <Typography.Title
          level={3}
          style={{
            color: colorPrimary,
            textAlign: "center",
          }}
        >
          {dictionary?.login.title}
        </Typography.Title>
        <FormLogin form={form} fnSuccess={onFinish} fnFaild={onFinishFailed} />
        <Divider style={{ margin: "0px 0px 10px" }} />
        <Typography.Text
          type="secondary"
          style={{ display: "block", textAlign: "center" }}
        >
          {dictionary?.login.notAccount}
          <Typography.Link href={Path.Register}>
            {dictionary?.login.registerNow}
          </Typography.Link>
        </Typography.Text>
      </Card>
    </div>
  );
};

export default observer(LoginPage);
