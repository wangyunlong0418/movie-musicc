import {observable, action, computed} from 'mobx';
import {get} from '../utils/axios';

class MovieStore {
  @observable city = '北京';
  @observable intheaterMovie = [];
  @observable comingSoonMovie = [];
  @observable topMovie = [];
  @observable detailInfo = {};
  @observable isPanded = false;
  @observable loading = {
    homeLoading: true,
    detailLoading: true,
  };

  @observable modal = {
    locationmodal: false,
  };

  @computed get pubdate() {
    let pubdate = '暂无信息';
    const {pubdates = []} = this.detailInfo;

    pubdates.forEach(item => {
      if (item.includes('中国大陆') || item.includes('电影节')) {
        pubdate = item;
      }
    });

    return pubdate;
  }

  @computed get summary() {
    let summaryText = '暂无简介';
    const {isPanded, detailInfo} = this;
    const {summary} = detailInfo;

    if (summary) {
      summaryText = isPanded ? summary : summary.slice(0, 65) + '...';
    }

    return summaryText;
  }

  @action handleLoading(key, status) {
    this.loading = {
      ...this.loading,
      [key]: status,
    };
  }

  @action handleModal(key, status) {
    console.log(key, status);
    this.modal = {
      ...this.modal,
      [key]: status,
    };
  }

  @action updateCity(city) {
    this.city = city;
  }

  @action.bound async getAllMovie() {
    const result = await Promise.all([
      get({
        url: '/movie/intheaters',
      }),
      get({
        url: '/movie/comingsoon',
      }),
      get({
        url: '/movie/top',
      }),
    ]);

    const {data: intheaterMovie} = result[0] || {};
    const {data: comingSoonMovie} = result[1] || {};
    const {data: topMovie} = result[2] || {};

    this.intheaterMovie = intheaterMovie.subjects;
    this.comingSoonMovie = comingSoonMovie.subjects;
    this.topMovie = topMovie.subjects;

    this.handleLoading('homeLoading', false);
  }

  @action.bound async getIntheaterMovie() {
    try {
      const {data} = await get({
        url: '/movie/intheaters',
      });
      this.intheaterMovie = data;
    } catch (error) {
      console.log(error);
    }
  }

  @action.bound async getComingSoonMovie() {
    try {
      const {data} = await get({
        url: '/movie/comingsoon',
      });
      this.comingSoonMovie = data.subjects;
    } catch (error) {
      console.log(error);
    }
  }

  @action.bound async getTopMovie() {
    try {
      const {data} = await get({
        url: '/movie/top',
      });
      this.topMovie = data.subjects;
    } catch (error) {
      console.log(error);
    }
  }

  @action initDetail() {
    this.detailInfo = {};
  }

  @action.bound async getDetail(id) {
    this.handleLoading('detailLoading', true);
    try {
      const {data} = await get({
        url: `/movie/detail/${id}`,
      });
      this.detailInfo = data;
    } catch (error) {}

    this.handleLoading('detailLoading', false);
  }

  @action.bound updatePandStatus() {
    this.isPanded = !this.isPanded;
  }
}

export default new MovieStore();
