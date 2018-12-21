<p align="center">
  <img src="https://assets.futuready.com/v2/asset/images/logo-futuready.png" height="50" /><br/>
  <span><b>BasicModel</b>: <span>Universal Model for Futuready Codeigniter [BETA]</span><br/>
  develop by and for <a href="https://futuready.com/" target="_blank">futuready.com</a>
</p>
  
<br/>

## Why

BasicModel helps you (developer) to create a code more fast and efficient. By using BasicModel, you just need to create a controller without create any model again.

## Features

- [x] **getRecordCount**: Return number of rows;
- [x] **getRecords**: Return array of records from table; *without softDelete;
- [x] **insertRecord**: Insert record, on successful updates return success: true;
- [x] **updateRecord**: Updates record, on successful updates return success: true;

- [x] **softDeleteRecord**: Instead delete record from table, we add deletedAt in database;
- [x] **getSoftDeletedRecords**: Return array of softDelete records from table;
- [x] **restoreSoftDeletedRecord**: Restore data which already in softDeletedRecord;

- [x] **hardDeleteRecord**: Delete record from table, and store it to log;

### Next features:

- [ ] **Upload File**: Upload file and record file description to database with return success;
- [ ] **Create Image Thumbnail**: Create thumb of uploaded image.;
- [ ] **Trending**: New column type to show Trending repositories ([#48](https://github.com/devhubapp/devhub/issues/48));
- [ ] **Keyboard shortcuts**: Full support for keyboard shortcuts and other accessibility improvements;
- [ ] **Drag & Drop**: Allow moving columns using drag&drop ([#42](https://github.com/devhubapp/devhub/issues/42))

> Which one do you want first? Any other recommendations? Search for [existing feature requests](https://github.com/devhubapp/devhub/issues?q=is%3Aissue+is%3Aopen+label%3A%22feature+request%22+sort%3Areactions-%2B1-desc) and add a 👍 reaction on them, or create a new one.

### Paid features:

#### Why is this app "just" 99% free and not 100%?

> "If you find something you think is cool then give that person some money for it so they can make more things you think are cool" 💙

DevHub plans to be a sustainable project. It's not made by a huge company like Facebook. It was created by a single developer that could be making $200k on Facebook, but instead makes $0 working on this full time. DevHub does not plan to work with donations and, instead, plan to create real value for its users and have a few paid features. If you want the project to live and be actively maintained, understand that it will need a revenue and consider subscribing to the paid plan once it launches.

- [ ] **Support for private repositories**: See what your team members are working on ([#32](https://github.com/devhubapp/devhub/issues/32));
- [ ] **Push notifications**: Enable push notifications for your filtered columns on mobile and/or desktop ([#51](https://github.com/devhubapp/devhub/issues/51));
- [ ] **GitHub Enterprise**: Support for self hosted GitHubs on local networks; contact us via e-mail: [enterprise@devhubapp.com](mailto:enterprise@devhubapp.com) so we can work on this together.

> Any suggestion for other paid features? Thoughts about the topic?  [Open an issue](https://github.com/devhubapp/devhub/issues/new)!


<br/>


## Keyboard shortcuts

| Key       | Action                       | Implemented    |
| --------- | ---------------------------- | -------------- |
| `Esc`     | Close current open modal     | ✅
| `a`, `n`  | Add a new column             | ✅
| `1`...`9` | Go to the `nth` column       | ✅
| `0`       | Go to the last column        | ✅
| `j`, `k`  | Move down/up inside a column | [Contribute!](https://github.com/devhubapp/devhub/blob/6157822c7723c85e11bf4bd781656a0204f81ab2/packages/components/src/screens/MainScreen.tsx#L94-L145)
| `s`       | Toggle save item for later   | [Contribute!](https://github.com/devhubapp/devhub/blob/fbe728fb106712092df1341aba5fdf12807e1f11/packages/components/src/components/cards/partials/NotificationCardHeader.tsx#L125-L133)
| `Arrow keys` + `Space` | Focus on elements and press things | Contribute!
| `Alt + Arrow keys` | Move current column | Contribute!
| `?`       | Show keyboard shortcuts      | Contribute!


<br/>

<br/>

## Tech Stack

- [TypeScript](https://github.com/Microsoft/TypeScript)
- [Create React App](https://github.com/facebook/create-react-app)
- [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) (Monorepo)
- [React](https://github.com/facebook/react) with [Hooks](https://reactjs.org/docs/hooks-intro.html)
- [React Native](https://github.com/facebook/react-native)
- [React Native Web](https://github.com/necolas/react-native-web)
- [Redux](https://github.com/reduxjs/react-redux)
- [Redux Persist](https://github.com/rt2zz/redux-persist)
- [Redux Saga](https://github.com/redux-saga/redux-saga/)
- [Reselect](https://github.com/reduxjs/reselect)
- [GraphQL](https://github.com/facebook/graphql)


<br/>

## Contributing

Bug reports, feature requests and other contributions are more than welcome! <br/>
Whenever possible, please make a pull request with the implementation instead of just requesting it.

> If the feature is big, please open an issue first for discussion.

### Running it locally

- `git clone git@github.com:devhubapp/devhub.git`
- `yarn`
- `yarn dev`

That's it. It will start three workers: `TypeScript compilation watcher`, `Web server` (create-react-app) and the `Mobile server` (react-native packager). The browser will open automatically.

To open the mobile projects, use:

- `yarn xcode`
- `yarn studio`

> Note: See License below. For example, you are allowed to use this locally, but not allowed to distribute the changed app to other people or remove its paid features, if any.

<br/>

## Author

Follow me on Twitter: [@brunolemos](https://twitter.com/brunolemos)

<a href="https://twitter.com/brunolemos" target="_blank"><img src="https://twitter.com/brunolemos/profile_image?size=original" height="100" /></a>

<br/>

## License

Copyright (c) 2018 [Bruno Lemos](https://twitter.com/brunolemos).

This is project provided as is without any warranties.<br/>
By using this app you agree with its [privacy](PRIVACY.md) policy and the  [license](LICENSE.md) below:

- ✅ You are encouraged to use, share and submit pull requests with improvements;

- ✅ You are allowed to use the official hosted version ([devhubapp.com](https://devhubapp.com/)) on your company or commercial projects;

- ✅ You are allowed to use the source code for personal non-commercial purposes only, like studying or contributing;

- 🚫 You are not allowed to distribute this app anywhere, neither changed versions of this app, including but not limited to Apple Store, Google Play or Web; Changes to the source code can only be used locally, taking in consideration the other points of this License;

- 🚫 You are not allowed to charge people for this app, neither bypass its paid features, if any;

> Don't like this license? [Suggestions welcome](https://github.com/devhubapp/devhub/issues/33).
