@echo .
@echo -----------------------------------------------
@echo Code By: https://github.com/HappyRogelio7
@echo Discord: https://discord.gg/3EebYUyeUX
@echo -----------------------------------------------
@echo .
@echo Buscamos la Carpeta donde esta nuestro bot
@echo Ejemplo: C:\Discord-Bots\Bot Puede Contener
@echo espacios ejemplo c:\Discord Bots\Bot
@echo .
@echo Esto es nesesario para que no de un error,
@echo ya que perfetamente podriamos poner solo:
@echo "\bot\my-bot" (Esto es un Ejmplo, ignore "").
@echo .
@echo ------------------------------------------------

cd c:\Bots Discord\Bot

@echo ------------------------------------------------
@echo .
@echo Selecionamos un titulo para el cmd 
@echo Ejemplo: Discord BOT
@echo .
@echo ------------------------------------------------

title Discord BOT

@echo ------------------------------------------------
@echo .
@echo Selecionamos un Color para el cmd
@echo Esto es Opcional en este caso 0a 
@echo Verde y negro estilo Hacker.
@echo .
@echo ------------------------------------------------

color 0a

@echo ------------------------------------------------
@echo .
@echo Iniciamos el Index de nuestro Bot de Discord,
@echo no siempre sera index.js puede ser bot.js o
@echo como tu el allas puesto a tu main.
@echo .
@echo ------------------------------------------------

node index.js
