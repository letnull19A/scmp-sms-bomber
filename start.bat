@echo off

if NOT EXIST "node_modules" (
	echo Install packages
	npm i
) ELSE (
	
)

npm run-script build