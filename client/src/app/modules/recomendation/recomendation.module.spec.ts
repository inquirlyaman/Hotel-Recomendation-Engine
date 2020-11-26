import { RecomendationModule } from './recomendation.module';

describe('RecomendationModule', () => {
  let recomendationModule: RecomendationModule;

  beforeEach(() => {
    recomendationModule = new RecomendationModule();
  });

  it('should create an instance', () => {
    expect(recomendationModule).toBeTruthy();
  });
});
