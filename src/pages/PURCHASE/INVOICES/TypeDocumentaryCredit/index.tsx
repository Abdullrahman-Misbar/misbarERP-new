import { Helmet } from "react-helmet-async";
import Main from "../../../../components/templates/PURCHASE/INVOICES/TypeDocumentaryCredit/Main";

type TypeDocumentaryCredit_TP = {
  title: string;
};

function TypeDocumentaryCredit({ title }: TypeDocumentaryCredit_TP) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div>
        <Main />
      </div>
    </>
  );
}

export default TypeDocumentaryCredit;
