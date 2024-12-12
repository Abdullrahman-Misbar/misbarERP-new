import { Helmet } from "react-helmet-async";
import Main from "../../../../components/templates/PURCHASE/NOTIFICATION/notificationCredit/Main";

type NotificationCredit_TP = {
  title: string;
};

function NotificationCredit({ title }: NotificationCredit_TP) {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Main/>
    </div>
  );
}

export default NotificationCredit;
