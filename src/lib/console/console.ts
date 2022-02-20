import colors from 'colors'
colors.enable();

export default class Console {

	public static Log(message : string) : void {
		console.log(`[ЛОГИ] ${message}`.cyan);
	}

	public static Warning(message : string) : void {
		console.log(`[ВНИМАНИЕ] ${message}`.yellow);
	}

	public static Error(message : string) : void {
		console.log(`[ОШИБКА] ${message}`.red);
	}

}