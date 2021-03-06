
export const state = () => ({
  postList: [
    {userPhoto: 'https://cdn.pixabay.com/photo/2017/07/22/15/21/cat-2528935_1280.jpg', userName: 'Andy Lau', postContent: 'Your life only lasts for a few decades, so be sure that you don\'t leave any regrets. Laugh or cry as you like, and it‘s meaningless to oppress yourself.', postDate: '2022/05/12 20:15', postLink: 'https://google.com'},
    {userPhoto: 'https://cdn.pixabay.com/photo/2016/11/04/03/20/cat-1796834_1280.jpg', userName: 'Andy Lau', postContent: 'You and I remains the same in different time, at different places,among different people; time is changing, space is changing and everything is changing except my miss to you!', postDate: '2022/05/12 20:15', postLink: 'https://google.com'},
    {userPhoto: 'https://cdn.pixabay.com/photo/2017/04/03/17/32/cat-2198984_1280.jpg', userName: 'Andy Lau', postContent: 'Why I must be a tiny part of others life though I am such a nice person? Sometimes you realise too late that what you are looking for is exactly what you just let go.', postDate: '2022/05/12 20:15', postLink: 'https://google.com'},
    {userPhoto: 'https://cdn.pixabay.com/photo/2017/03/05/20/07/baby-cat-2119698_1280.jpg', userName: 'Andy Lau', postContent: 'When u have a crush on someone, u notice every little thing and when they do something for u, u feel touched no matter how small!', postDate: '2022/05/12 20:15', postLink: 'https://google.com'},
    {userPhoto: 'https://cdn.pixabay.com/photo/2020/09/04/08/02/cat-5543222_1280.jpg', userName: 'Andy Lau', postContent: 'There is someone that is coming or passing away in your life around the clock, so you may lose sight of those seen, and forget those remembered. There is gain and loss in your life, so you may catch sight of those unseen, and remember those forgotten. Nevertheless, doesn‘t the unseen exist for sure? Will the remembered remain for ever?', postDate: '2022/05/12 20:15', postLink: 'https://google.com'},
    {userPhoto: 'https://cdn.pixabay.com/photo/2020/05/29/05/48/cat-5233741_1280.jpg', userName: 'Andy Lau', postContent: 'The sign of maturity is not when you start speaking big things， But, actually it is, When you start understanding Small things', postDate: '2022/05/12 20:15', postLink: 'https://google.com'},
    {userPhoto: 'https://cdn.pixabay.com/photo/2017/03/27/19/21/cat-2180079_1280.jpg', userName: '李淳罡', postContent: '天不生我李淳罡，劍道萬古長如夜', postDate: '2022/05/12 20:15', postLink: 'https://google.com'},
    {userPhoto: 'https://cdn.pixabay.com/photo/2018/07/04/16/09/kitten-3516389_1280.jpg', userName: 'Andy Lau', postContent: '123', postDate: '2022/05/12 20:15', postLink: 'https://google.com'},
    {userPhoto: 'https://cdn.pixabay.com/photo/2018/05/31/18/15/cat-3444743_1280.jpg', userName: 'Andy Lau', postContent: 'Hello 文字1231文字文字，文字文字文字文字，文字文字文字文字，文字文字23123231123123213213文字文字文字文字文字文文字文字，文字文字文字文字，文字文字文字文字，文字文字文字文字，文字文字文字文字，文字文字文字文字，文字文字文字文字，文字文字文字文字，文字文字字文字，文字文字文字文字文字文字文字，文字文字文字文字文字文字文字', postDate: '2022/05/12 20:15', postLink: 'https://google.com'},
    {userPhoto: 'https://cdn.pixabay.com/photo/2019/01/09/02/50/pet-3922468_1280.jpg', userName: 'Andy Lau', postContent: 'Hello 文字1231文字文字，文字文字文字文字，文字文字文字文字，文字文字23123231123123213213文字文字文字文字文字文文字文字，文字文字文字文字，文字文字文字文字，文字文字文字文字，文字文字文字文字，文字文字文字文字，文字文字文字文字，文字文字文字文字，文字文字字文字，文字文字文字文字文字文字文字，文字文字文字文字文字文字文字', postDate: '2022/05/12 20:15', postLink: 'https://google.com'}
  ],
  isAllowGetPostData: true
});

export const mutations = {
  addPost(state) {
    state.postList.push(
      {userPhoto: 'https://cdn.pixabay.com/photo/2017/07/22/15/21/cat-2528935_1280.jpg', userName: '沒有Call Twitter API(1)', postContent: '起初，我想在瀏覽器去直接Call API，但資料查閱一陣子後，發現API貌似不允許CORS，解決方式有使用別人的代理，', postDate: '2022/05/12 20:15', postLink: 'https://google.com'},
      {userPhoto: 'https://cdn.pixabay.com/photo/2017/04/03/17/32/cat-2198984_1280.jpg', userName: '沒有Call Twitter API(2)', postContent: '或自己搭建server讓瀏覽器去Call Server在讓Server去Call API將資料回傳給瀏覽器', postDate: '2022/05/12 20:15', postLink: 'https://google.com'},
      {userPhoto: 'https://cdn.pixabay.com/photo/2017/03/05/20/07/baby-cat-2119698_1280.jpg', userName: '沒有Call Twitter API(3)', postContent: '但自己對後端搭建伺服器了解甚少，短時間內恐無法實踐，故未使用該API。', postDate: '2022/05/12 20:15', postLink: 'https://google.com'},
    {userPhoto: 'https://cdn.pixabay.com/photo/2016/11/04/03/20/cat-1796834_1280.jpg', userName: '模擬了捲軸到底時讀取新的資料(1)', postContent: '您所見的資料都是static的，我在Vuex actions進行了settimeout去延遲更新資料，', postDate: '2022/05/12 20:15', postLink: 'https://google.com'},
    {userPhoto: 'https://cdn.pixabay.com/photo/2020/09/04/08/02/cat-5543222_1280.jpg', userName: '模擬了捲軸到底時讀取新的資料(2)', postContent: '並做了簡易的throttle，用以防止判斷卷軸時不斷推進新的資料，', postDate: '2022/05/12 20:15', postLink: 'https://google.com'},
    {userPhoto: 'https://cdn.pixabay.com/photo/2020/05/29/05/48/cat-5233741_1280.jpg', userName: '模擬了捲軸到底時讀取新的資料(3)', postContent: '然而這個throttle並非一個函數，只是簡單的開關了一個flag，在這沒有與伺服器交互，意義上比較類似debounce', postDate: '2022/05/12 20:15', postLink: 'https://google.com'},
    {userPhoto: 'https://cdn.pixabay.com/photo/2017/03/27/19/21/cat-2180079_1280.jpg', userName: '沒有實際了解Nuxt(1)', postContent: '最起初想依賴這個專案去體會SSR及Nuxt的配置，但由於沒有Call API，也尚未理解Nuxt在靜態頁面上去預先把資料渲染進HTML', postDate: '2022/05/12 20:15', postLink: 'https://google.com'},
    {userPhoto: 'https://cdn.pixabay.com/photo/2018/07/04/16/09/kitten-3516389_1280.jpg', userName: '沒有實際了解Nuxt(2)', postContent: '故沒有辦法對Nuxt有特別的感受。', postDate: '2022/05/12 20:15', postLink: 'https://google.com'},
    {userPhoto: 'https://cdn.pixabay.com/photo/2018/05/31/18/15/cat-3444743_1280.jpg', userName: '末文(1)', postContent: '礙於能力尚且不足，故專案無法順利完成，但非常感謝貴司予以這個機會，讓我能體驗一次按照規格撰寫專案是什麼樣的感覺，', postDate: '2022/05/12 20:15', postLink: 'https://google.com'},
    {userPhoto: 'https://cdn.pixabay.com/photo/2019/01/09/02/50/pet-3922468_1280.jpg', userName: '末文(2)', postContent: '同時也體會到自身能力的不足，以及在閱讀文檔時理解能力不足的狀況，再次感謝。', postDate: '2022/05/12 20:15', postLink: 'https://google.com'}
    )
  },
  changeAllowGetPostData(state, boolean) {
    boolean ? state.isAllowGetPostData = true : state.isAllowGetPostData = false
  }
}

export const actions = {
  getPostData(context) {
    context.commit('changeAllowGetPostData', false)

    new Promise((resolve) => {
      setTimeout(() => {
        context.commit('addPost')
        resolve()
      }, 500)
    })
      .then(() => {
        context.commit('changeAllowGetPostData', true)
      })
  }
}