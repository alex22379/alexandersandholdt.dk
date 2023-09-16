type DefaultLangCode = "da"
type SupportedLangCode = "en"
type LangCode = DefaultLangCode | SupportedLangCode
type RouteUri = | "/404" | "/" 
type RouteParams = {"/404": undefined; "/": undefined; }
type TranslationPath = "404.title" | "404.subtitle" | "site.mail" | "site.cvr" | "header.links.instagram.text" | "header.links.instagram.url" | "header.links.instagram.icon" | "header.links.linkedin.text" | "header.links.linkedin.url" | "header.links.linkedin.icon" | "header.links.mail.text" | "header.links.mail.url" | "header.links.mail.icon" | "footer.contact.title" | "footer.contact.subtitle" | "profile.portraitAlt" | "profile.tabTitles.about" | "profile.tabTitles.education" | "profile.tabTitles.skills" | "profile.tabTitles.experience"
type TranslationOptions = { "404.title": {} | undefined; "404.subtitle": {} | undefined; "site.mail": {} | undefined; "site.cvr": {} | undefined; "header.links.instagram.text": {} | undefined; "header.links.instagram.url": {} | undefined; "header.links.instagram.icon": {} | undefined; "header.links.linkedin.text": {} | undefined; "header.links.linkedin.url": {} | undefined; "header.links.linkedin.icon": {} | undefined; "header.links.mail.text": {} | undefined; "header.links.mail.url": {} | undefined; "header.links.mail.icon": {} | undefined; "footer.contact.title": {} | undefined; "footer.contact.subtitle": {} | undefined; "profile.portraitAlt": {} | undefined; "profile.tabTitles.about": {} | undefined; "profile.tabTitles.education": {} | undefined; "profile.tabTitles.skills": {} | undefined; "profile.tabTitles.experience": {} | undefined; }

declare module "astro-i18n" {
	export * from "astro-i18n/"
	
	export function l<Uri extends RouteUri>(
		route: Uri | string & {},
		...args: Uri extends keyof RouteParams
			? undefined extends RouteParams[Uri]
				? [params?: Record<string, string>, targetLangCode?: LangCode, routeLangCode?: LangCode]
				: [params: RouteParams[Uri], targetLangCode?: LangCode, routeLangCode?: LangCode]
			: [params?: Record<string, string>, targetLangCode?: LangCode, routeLangCode?: LangCode]
	): string
	
	export function t<Path extends TranslationPath>(
		path: Path | string & {},
		...args: undefined extends TranslationOptions[Path]
			? [options?: keyof TranslationOptions extends Path ? Record<string, unknown> : TranslationOptions[Path], langCode?: LangCode]
			: [options: TranslationOptions[Path], langCode?: LangCode]
	): string
	
	export function extractRouteLangCode(route: string): LangCode | undefined
	
	type Translation = string | { [translationKey: string]: string | Translation }
	type Translations = { [langCode: string]: Record<string, Translation> }
	type RouteTranslations = { [langCode: string]: Record<string, string> }
	type InterpolationFormatter = (value: unknown, ...args: unknown[]) => string
	class AstroI18n {
		defaultLangCode: DefaultLangCode
		supportedLangCodes: SupportedLangCode[]
		showDefaultLangCode: boolean
		translations: Translations
		routeTranslations: RouteTranslations
		get langCodes(): LangCode[]
		get langCode(): LangCode
		set langCode(langCode: LangCode)
		get formatters(): Record<string, InterpolationFormatter>
		init(Astro: { url: URL }, formatters?: Record<string, InterpolationFormatter>): void
		addTranslations(translations: Translations): void
		addRouteTranslations(routeTranslations: RouteTranslations): void
		getFormatter(name: string): InterpolationFormatter | undefined
		setFormatter(name: string, formatter: InterpolationFormatter): void
		deleteFormatter(name: string): void
	}
	export const astroI18n: AstroI18n
}
