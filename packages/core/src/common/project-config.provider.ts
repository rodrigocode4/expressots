const enum Pattern {
	LOWER_CASE = "lowercase",
	KEBAB_CASE = "kebab-case",
	PASCAL_CASE = "PascalCase",
	CAMEL_CASE = "camelCase",
}

/**
 * The configuration object for the Expresso CLI.
 *
 * @property {Pattern} scaffoldPattern - The pattern to use when scaffolding files.
 * @property {string} sourceRoot - The root directory for the source files.
 * @property {boolean} opinionated - Whether or not to use the opinionated configuration.
 *
 * @see [ExpressoConfig](https://expresso-ts.com/docs)
 */
interface ExpressoConfig {
	scaffoldPattern: Pattern;
	sourceRoot: string;
	opinionated: boolean;
}

export { ExpressoConfig, Pattern };
