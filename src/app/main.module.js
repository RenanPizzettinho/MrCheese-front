import * as angular from 'angular';

import { default as uiRouter } from '@uirouter/angularjs';
import { clienteConfig } from './cliente/cliente.config';
import { queijoConfig } from './queijo/queijo.config';
import { configPrecoConfig } from './configuracao/configuracao.config';
import { pedidoConfig } from './pedido/pedido.config';
import { default as uiNotification } from 'angular-ui-notification'

export const appModule = 'app';

var modulo = angular.module(appModule, [uiRouter, uiNotification]);

modulo.config(clienteConfig(modulo))
    .config(queijoConfig(modulo))
    .config(configPrecoConfig(modulo))
    .config(pedidoConfig(modulo));
