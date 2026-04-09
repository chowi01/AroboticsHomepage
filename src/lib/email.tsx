interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export function EmailTemplate({
  name,
  email,
  phone,
  company,
  message,
}: EmailTemplateProps) {
  return (
    <div>
      <h2>홈페이지 문의사항</h2>
      <hr />
      <p>
        <strong>이름:</strong> {name}
      </p>
      <p>
        <strong>이메일:</strong> {email}
      </p>
      <p>
        <strong>연락처:</strong> {phone}
      </p>

      <p>
        <strong>회사명:</strong> {company}
      </p>

      <hr />
      <h3>문의내용</h3>
      <p>{message.replace(/\n/g, "<br />")}</p>
    </div>
  );
}
