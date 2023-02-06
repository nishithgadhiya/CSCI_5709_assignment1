# Assignment1

* *Date Created*: 02 Feb 2023
* *Last Modification Date*: 05 Feb 2023
* *Git URL*: <https://git.cs.dal.ca/ngadhiya/csci-5709-assignments.git>
* *Netlify deployed URL*: <https://ngadhiya-csci-5709-assignment1.netlify.app/>
* *Github URL*: <https://github.com/suijaa/CSCI_5709_assignment1.git>
* *Task Flow diagram in Lucid.app tool (Your Lucid login required)*: <https://lucid.app/lucidspark/d802cae3-1e73-4e38-9d78-89460f7fa0d7/edit?viewport_loc=-683%2C161%2C3065%2C1777%2C0_0&invitationId=inv_bc6dd6fe-01d4-4ef5-8eb8-201bc551e3d7>
* *Lo-Fidelity Prototype in Balsamiq tool*: <https://balsamiq.cloud/s409pew/pitd0b1/r3C1E>

## Author

* [Nishith Vithaldas Gadhiya](nishith.gadhiya@dal.ca) - *(developer)*

## Getting Started

### Prerequisites

```
- Install git: 'https://git-scm.com/book/en/v2/Getting-Started-Installing-Git'

- Install Code Editor (VS code): 'https://code.visualstudio.com/download'

```

### Installing

```
- Clone the code from gitLab using git command: 'git clone https://git.cs.dal.ca/ngadhiya/csci-5709-assignments.git'

- open code in VS code editor

- open terminal in VScode and traverse to assignment1 folder using command: 'cd assignment1'

- in terminal install dependences using command: 'npm install'

- run the code using command: 'npm start'
```

- output: in the terminal

        Compiled successfully!

        You can now view assignment1 in the browser.

        Local:            http://localhost:3000
        On Your Network:  http://your-ip:3000

        Note that the development build is not optimized.
        To create a production build, use npm run build.

        webpack compiled successfully

- output: In browser 'http://localhost:3000' you will see the app

## Deployment

- uploaded my code on github
- signin in my netlify account
- connected and gave permission to link my github account in netlify
- choose github repo to deploy
- deployed!

## Built With

* [React](https://reactjs.org/) - The web framework used
* [MaterialUI](https://mui.com/) - The CSS framework used


## Sources Used

### 1: assignment1/src/components/Header.js

*Lines 79 - 91*

```

The code above was created by adapting the code in [Marianna](https://dev.to/mar1anna/create-a-search-bar-with-react-and-material-ui-4he) as shown below: 


```
*reference code:*
  ```  
    <IconButton type="submit" aria-label="search">
      <SearchIcon style={{ fill: "blue" }} />
    </IconButton>
``` 
    
*mycode:*
``` 
    <IconButton
            type="button"
            onClick={{ handleSearch }}
            aria-label="search"
          >
            <SearchOutlined
              style={{
                fill: "#252525",
                height: "2rem",
                width: "2rem",
              }}
            />
    </IconButton>
``` 
- <!---How---> The code in [Marianna](https://dev.to/mar1anna/create-a-search-bar-with-react-and-material-ui-4he) was implemented by...
    ``` Marianna demostrats how to use icon as a button.``` 
- <!---Why---> [Marianna](https://dev.to/mar1anna/create-a-search-bar-with-react-and-material-ui-4he)'s Code was used because...
``` I wanted a search icon beside search bar as a button.``` 
  
- <!---How---> [Marianna](https://dev.to/mar1anna/create-a-search-bar-with-react-and-material-ui-4he)'s Code was modified by...
``` Changed size, type and color of the icon button as per my theme.``` 

### 2: assignment1/src/components/Header.js

*Lines 103 - 127*

```

The code above was created by adapting the code in [MaterialUI](https://mui.com/material-ui/react-menu/) as shown below: 

```
*reference code:*
``` 
    <PopupState variant="popover" popupId="demo-popup-menu">
    {(popupState) => (
        <React.Fragment>
        <Button variant="contained" {...bindTrigger(popupState)}>
            Dashboard
        </Button>
        <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Profile</MenuItem>
            <MenuItem onClick={popupState.close}>My account</MenuItem>
            <MenuItem onClick={popupState.close}>Logout</MenuItem>
        </Menu>
        </React.Fragment>
    )}
    </PopupState>
``` 
*mycode:*
``` 
    <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <Box>
                <Button
                  sx={{
                    background: "#8c7353",
                    textTransform: "none",
                    height: "2.5rem",
                    "&:hover": {
                      backgroundColor: "#5e3e15",
                    },
                  }}
                  variant="contained"
                  {...bindTrigger(popupState)}
                >
                  Account
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}>
                    Update Password
                  </MenuItem>
                  <MenuItem onClick={popupState.close}>Update Details</MenuItem>
                </Menu>
              </Box>
            )}
    </PopupState>
``` 
- <!---How---> The code in [MaterialUI](https://mui.com/material-ui/react-menu/) was implemented by...
``` MaterialUI official document shows how to use dropdown button in an esthetic way``` 
  
- <!---Why---> [MaterialUI](https://mui.com/material-ui/react-menu/)'s Code was used because...
``` I wanted a dropdown button which will reveal more option when clicked for account settings``` 
  
- <!---How---> [MaterialUI](https://mui.com/material-ui/react-menu/)'s Code was modified by...
``` Modified styling, options and size as per my theme and sitemap``` 

### 3: assignment1/src/components/images/logo.png

  - This image is sourced from [onlinewebfonts.com](https://www.onlinewebfonts.com/icon/554662)

