import { useTranslation } from "react-i18next";
import { TranslationKeys } from "../types/translationKeys";

export const useTypeSafeTranslation = () => {
    const { t } = useTranslation();
    return {
        t: (s: TranslationKeys) => t(s),
    };
};
