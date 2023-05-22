import { useContext, useEffect } from 'react';

//ctx
import CommonContext from 'contexts/CommonContext';

//constants
import { SELECTED_MENU_KEY_TYPE } from 'configs/menu.config';

interface Props {
  dependencies?: any;
  breadrumbs: {
    items: { name: string; url?: string }[];
  };
  selectedMenu: SELECTED_MENU_KEY_TYPE | null;
}

const useBreadcrumb = (props: Props) => {
  const { setBreadcrumbs, setSelectedMenu } = useContext(CommonContext);

  useEffect(
    () => {
      setBreadcrumbs(props.breadrumbs);
      setSelectedMenu(props.selectedMenu);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    props?.dependencies ? [...props?.dependencies] : [],
  );
};

export default useBreadcrumb;
