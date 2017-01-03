import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

var instance = axios.create();
const mock = new MockAdapter(instance);

// news: titie,url,home-page-pict-url
mock.onPost('index/slidelist').reply(200, {
  state: 1,
  message: 'null',
  data:
    [ { title: '计算机视觉中心获“三好三有团队”称号 1',
        url: '/about',
      pictpath: 'http://www.xidian.edu.cn/_mediafile/xadzkjdx2/2016/12/19/3e8aibylk2.jpg'
      },
      { title: '计算机视觉中心获“三好三有团队”称号 3',
        url: '/about',
        pictpath: 'http://www.xidian.edu.cn/_mediafile/xadzkjdx2/2016/12/19/3e8aibylk2.jpg'
      },
      { title: '计算机视觉中心获“三好三有团队”称号 3',
        url: '/about',
        pictpath: 'http://www.xidian.edu.cn/_mediafile/xadzkjdx2/2016/12/19/3e8aibylk2.jpg'
      },
      { title: '计算机视觉中心获“三好三有团队”称号 4',
        url: '/about',
        pictpath: 'http://www.xidian.edu.cn/_mediafile/xadzkjdx2/2016/12/19/3e8aibylk2.jpg'
      },
      { title: '计算机视觉中心获“三好三有团队”称号 5',
        url: '/about',
        pictpath: 'http://www.xidian.edu.cn/_mediafile/xadzkjdx2/2016/12/19/3e8aibylk2.jpg'
      }
    ]

});
mock.onPost('/users/login').reply(200, {
  success: true,
  entity: {
    roles: ['READER'],
    id: 1,
    username: 'cauchywei',
    name: 'Wei Qin',
    avatarUrl: '233',
    age: '20',
    major: 'CS',
    phone: '23333',
    email: 'cauchywei@gmail.com',
    remarks: 'hi'
  }
});

mock.onGet('/users/self/').reply(200, {
  role: 'READER',
  id: 1,
  username: 'cauchywei',
  name: 'Wei Qin',
  avatarUrl: '233',
  age: '20',
  major: 'CS',
  phone: '23333',
  email: 'cauchywei@gmail.com',
  remarks: 'hi'
});

export default instance;
