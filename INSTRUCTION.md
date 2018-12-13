Lifecycle & External Data & State Management

Task 1. componentDidMount in action
Locate the file "src/screens/home/index.js"
Find and replace the Keyword: TODO 01 with below code

this.loadFeaturedEvents();
this.loadUpcomingEvents();

Task 2. create a request using axios
Locate the file "src/helpers/request.helper.js"
Find and replace the Keyword: TODO 02 with below code

static async get(apiUrl, params) {
  const header = await this.getHeader();
  return instance
    .get(apiUrl, {
      headers: header,
      params: params,
      paramsSerializer: params => {
        return qs.stringify(params, { arrayFormat: "repeat" });
      }
    })
    .then(data => {
      if (data.status === 204) {
        Toast.showLongBottom("Data not found!");
      }
      return data.data;
    })
    .catch(e => {
      handleError(e);
      throw e;
    });
}

Task 3. attach params when request to APIs
Locate the file "src/helpers/request.helper.js"
Find and replace the Keyword: TODO 03 with below code

Accept: "application/json",
"Content-Type": "application/json",
"Ocp-Apim-Subscription-Key": "ef68321d65c24a09b7b0319c8b8152d2"

Task 4. dispatch LOAD_CURRENT_USER action to request user profile
Locate the file "src/screens/onboarding/index.js"
Find and replace the Keyword: TODO 04 with below code

this.props.loadCurrentUser();

Task 5. call API when receive the action LOAD_CURRENT_USER
Locate the file "src/sagas/user.saga.js"
Find and replace the Keyword: TODO 05 with below code

const currentUser = yield call(UserAPI.getCurrentUser);
yield put({ type: LOAD_CURRENT_USER_FULFILLED, currentUser });


Task 6. update user profile info into store
Locate the file "src/reducers/user.reducer.js"
Find and replace the Keyword: TODO 06 with below code

return Object.assign({}, state, {
  currentUser: action.currentUser,
  loading: false,
  loaded: true,
  loadFailed: false
});

Task 7. connect profile data to profile screen
Locate the file "src/screens/profile/index.js"
Find and replace the Keyword: TODO 07 with below code

return state.user;
