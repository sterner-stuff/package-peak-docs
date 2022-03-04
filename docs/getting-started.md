---
lang: en-US
title: Getting Started
description: Sign up for Package Peak, connect to Envato, and sync your plugins and themes.
---

# Getting Started
[[toc]]

## Sign Up
You can sign up for Package Peak at [https://packagepeak.app](https://packagepeak.app). There is a 15 day free trial, after which a subscription is $6/mo.

## Connect to Envato
From the Package Peak homepage, click the "Authenticate Envato" button to begin authenticating with an Envato account. You'll be asked to give Package Peak permission to access your purchases. Accept to continue.

Your packages will be queued for syncing to Package Peak and should be available shortly.

## Using Composer
In addition to making your purchases available for download in your Package Peak dashboard, you can use Package Peak as a Composer repository. For more information on managing WordPress sites with Composer, check out [Bedrock](https://roots.io/bedrock/).

### Generate an API token
From your Package Peak dashboard, generate an API token. Copy and paste it, because it won't be retrievable. You can generate as many API tokens as you need over time, and can revoke them at will.

### Configure Composer
Next you should add Package Peak as a repository in your project's `composer.json` file. 

#### Composer >= 1.10.0
The following instructions will add Package Peak as a repo for your project and add your API token to the `auth.json` file.
```
composer config repositories.packagepeak.app composer https://packagepeak.app
composer config bearer.packagepeak.app <api-token>
```
::: danger Keep Secrets Secret
You should not commit Composer's `auth.json` file:
```
echo "auth.json" >> .gitignore
```
:::
::: tip Global Configuration
Add the `--global` flag to either of the above commands to set this configuration globally. We don't recommend this for the repository configuration, as this may confuse other developers working on the project. Since the auth configuration should be .gitignore'd anyway, global configuration may make sense.
:::

#### Composer < 1.10.0
These instructions are not regularly reviewed. Composer < 1.10.0 is not officially supported.
```
composer config gitlab-domains packagepeak.app
composer config repositories.packagepeak.app composer https://packagepeak.app
```

### Install a Package
Installing a WordPress theme or plugin you've purchased on Envato is now as simple as:

```
composer require wpexplorer/total
```

Please see your Package Peak dashboard for package names for each of your purchases.