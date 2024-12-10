import { Helmet } from "react-helmet-async";
import Main from "../../../../components/templates/PURCHASE/NOTIFICATION/notificationDebit/Main";

type NotificationDebit_TP = {
  title: string;
};

function NotificationDebit({ title }: NotificationDebit_TP) {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Main/>
    </div>
  );
}

export default NotificationDebit;
