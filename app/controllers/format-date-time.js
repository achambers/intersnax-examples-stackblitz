import Controller from '@ember/controller';

export default class FormatDateTimeController extends Controller {
  @service intl;

  isoDate;

  constructor() {
    super();

    this.isoDate = '2022-12-31T14:31:00';
  }

  get fakeDate() {
    console.log('!!!!!!!!!!!!!!!!!!!!!!', this.isoDate);
    return new Date(this.isoDate);
  }
}
