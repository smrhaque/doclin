import { GlobalStateType } from '../../enums';
import { Project } from '../../types';
import CacheManager from './CacheManager';

const THIRTY_DAYS_TTL = 30 * 24 * 60 * 60 * 1000;

export default class ProjectCacheMananger extends CacheManager<number, Project> {
	constructor() {
		super(GlobalStateType.PROJECT_MAP_CACHE, THIRTY_DAYS_TTL);
	}
}