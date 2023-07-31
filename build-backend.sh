#!/bin/bash

echo "*** Instalando dependencias"

npm install

echo ""
echo "*** Instalando NestJS validations"

npm i --save class-validator class-transformer

echo ""
echo "*** Instalación completa"
