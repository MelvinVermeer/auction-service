### AWS CLI

```
$ curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "AWSCLIV2.pkg"
$ sudo installer -pkg AWSCLIV2.pkg -target /
```

### Serverless

```
npm install -g serverless
```

### Configuring aws cli

1. create iam user with sufficient permissions
2. allow programmatic access.

On the cli run `aws configure`

```
AWS Access Key ID [None]: AKIA*****3HXP
AWS Secret Access Key [None]: VJZ*****iv9
Default region name [None]: eu-west-1
Default output format [None]: yaml
```

### Deploying / Remove

```
sls deploy
sls remove
```

#### Deploying a single function

```
sls deploy -f createAuction -v
```

### Invoke scheduled function

```
sls invoke -f processAuctions -l
```
