import { fetchUserData, fetchRepositories } from './gateways.js'
import { renderUserData } from './user.js'
import { renderRepos, cleanReposList } from './repos.js'
import { showSpinner, hiddenSpinner } from './spinner.js'

const defaultAvatar = 'https://avatars3.githubusercontent.com/u10001';
const defaultUser = {
    avatar_url: defaultAvatar,
    name: '',
    location: '',
};

renderUserData(defaultUser);

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

const onSearchUser = () => {
    showSpinner();
    cleanReposList();
    const userName = userNameInputElem.value;
    fetchUserData(userName)
        .then(userData => {
            renderUserData(userData);
            return userData.repos_url;
        })
        .then(url => fetchRepositories(url))
        .then(reposList => {
            renderRepos(reposList);
        })
        .catch(err => {
            alert(err.message);
        })
        .finally(() => hiddenSpinner());
};

showUserBtnElem.addEventListener('click', onSearchUser);