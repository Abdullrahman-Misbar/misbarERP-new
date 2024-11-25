import { useTranslation } from "react-i18next"

export const useIsRTL = () => {
    const { i18n } = useTranslation()
    return i18n.language.startsWith('ar')
}