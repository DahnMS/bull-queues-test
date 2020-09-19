import './config/environment';
import logQueueService from './services/LogQueueService';
import capitalizeQueueService from './services/CapitalizeQueueService';

logQueueService.process();
capitalizeQueueService.process();
