import {observable} from 'mobx';
class TestStore {
  @observable msg = 'hello rn';
}

export default new TestStore();
