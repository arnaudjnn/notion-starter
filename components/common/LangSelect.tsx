import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { allLanguages } from 'i18n.json';
import Select from 'components/common/Select';

const LangSelect = () => {
  const router = useRouter()
  const { t, lang } = useTranslation()

  const options = allLanguages.map(lng => ({
    value: lng, label: lng.toUpperCase()
  }))
  const defaultValue = options.find(option => option.value === lang)

  function handleChange(lng) {
    const regex = new RegExp(`^/(${allLanguages.join('|')})`)
    router.push(router.pathname.replace(regex, `/${lng.value}`), router.asPath.replace(regex, `/${lng.value}`))
  }

  return (
    <Select
      isSearchable={false}
      onChange={handleChange}
      defaultValue={defaultValue}
      placeholder={lang.toUpperCase()}
      options={options}
    />
  )
}

export default LangSelect