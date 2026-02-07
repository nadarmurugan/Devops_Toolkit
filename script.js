// Enhanced tool data for modal content
const toolData = {
    docker: {
        title: "Docker",
        description: "Docker is a platform for developing, shipping, and running applications in containers. Containers allow developers to package an application with all of its dependencies into a standardized unit for software development.",
        keyFeatures: [
            "Lightweight, standalone, executable software packages",
            "Consistent environment across development, testing, and production",
            "Isolation of applications from the underlying infrastructure",
            "Rapid deployment and scaling capabilities",
            "Docker Compose for multi-container applications"
        ],
        useCases: [
            "Microservices architecture implementation",
            "Continuous Integration/Continuous Deployment (CI/CD)",
            "Development environment standardization",
            "Application isolation and security"
        ],
        resources: [
            "Official Documentation: docs.docker.com",
            "Docker Hub: hub.docker.com",
            "Docker Compose for multi-container applications"
        ]
    },
    kubernetes: {
        title: "Kubernetes",
        description: "Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications.",
        keyFeatures: [
            "Automated rollouts and rollbacks",
            "Service discovery and load balancing",
            "Storage orchestration",
            "Self-healing capabilities with automatic container replacement",
            "Horizontal scaling based on CPU usage or custom metrics"
        ],
        useCases: [
            "Managing microservices at scale",
            "High-availability production deployments",
            "Hybrid and multi-cloud deployments",
            "Batch processing and workload scheduling"
        ],
        resources: [
            "Official Documentation: kubernetes.io/docs",
            "Minikube for local Kubernetes clusters",
            "Helm: The package manager for Kubernetes"
        ]
    },
    terraform: {
        title: "Terraform",
        description: "Terraform is an Infrastructure as Code (IaC) tool that allows you to build, change, and version infrastructure safely and efficiently.",
        keyFeatures: [
            "Declarative configuration language (HCL)",
            "Execution plans to preview infrastructure changes",
            "Resource graph to build and modify resources efficiently",
            "Change automation with minimal human interaction",
            "State management for tracking infrastructure"
        ],
        useCases: [
            "Multi-cloud deployment management",
            "Disaster recovery and environment replication",
            "Infrastructure compliance and governance",
            "Automated provisioning of development environments"
        ],
        resources: [
            "Official Documentation: terraform.io/docs",
            "Terraform Registry: registry.terraform.io",
            "Terraform Cloud for team collaboration"
        ]
    },
    jenkins: {
        title: "Jenkins",
        description: "Jenkins is an open-source automation server that enables developers to build, test, and deploy their software with continuous integration and continuous delivery.",
        keyFeatures: [
            "Hundreds of plugins to support building and testing",
            "Pipeline as Code with Jenkinsfile",
            "Distributed builds across multiple machines",
            "Easy installation and configuration",
            "Built-in support for Docker and Kubernetes"
        ],
        useCases: [
            "Automated testing and quality assurance",
            "Continuous Integration pipelines",
            "Automated deployment to various environments",
            "Scheduled jobs and maintenance tasks"
        ],
        resources: [
            "Official Documentation: jenkins.io/doc",
            "Jenkins Plugin Index: plugins.jenkins.io",
            "Jenkins Pipeline Syntax"
        ]
    },
    "github-actions": {
        title: "GitHub Actions",
        description: "GitHub Actions is a continuous integration and continuous delivery (CI/CD) platform that allows you to automate your build, test, and deployment pipeline.",
        keyFeatures: [
            "Native integration with GitHub repositories",
            "Event-driven workflows (push, pull request, issues)",
            "Extensive marketplace of pre-built actions",
            "Free for public repositories and generous free tier for private",
            "Matrix builds for multiple OS/version combinations"
        ],
        useCases: [
            "Automated testing on every pull request",
            "Automated deployment to cloud platforms",
            "Repository maintenance automation",
            "Scheduled tasks and reporting"
        ],
        resources: [
            "Official Documentation: docs.github.com/actions",
            "GitHub Marketplace: github.com/marketplace",
            "Starter workflows for common languages"
        ]
    },
    gitlab: {
        title: "GitLab CI/CD",
        description: "GitLab is a complete DevOps platform with built-in CI/CD, container registry, security scanning, and more.",
        keyFeatures: [
            "Single application for the entire DevOps lifecycle",
            "Built-in container registry",
            "Auto DevOps for automatic pipeline creation",
            "Security scanning (SAST, DAST, dependency scanning)",
            "Kubernetes integration"
        ],
        useCases: [
            "End-to-end DevOps platform",
            "Container image management",
            "Security scanning in CI/CD",
            "Project management with issues and milestones"
        ],
        resources: [
            "Official Documentation: docs.gitlab.com",
            "GitLab Container Registry",
            "GitLab Auto DevOps"
        ]
    },
    aws: {
        title: "Amazon Web Services",
        description: "Amazon Web Services (AWS) is the world's most comprehensive and broadly adopted cloud platform, offering over 200 fully featured services from data centers globally.",
        keyFeatures: [
            "Broadest and deepest cloud services portfolio",
            "Global infrastructure with 84 Availability Zones",
            "Pay-as-you-go pricing model",
            "Enterprise-grade security and compliance",
            "Serverless computing with Lambda"
        ],
        coreServices: [
            "EC2: Virtual servers in the cloud",
            "S3: Scalable object storage",
            "RDS: Managed relational databases",
            "Lambda: Serverless compute",
            "VPC: Isolated cloud resources",
            "IAM: Identity and access management",
            "EKS: Managed Kubernetes service"
        ],
        resources: [
            "AWS Free Tier: aws.amazon.com/free",
            "AWS Documentation: docs.aws.amazon.com",
            "AWS Training and Certification"
        ]
    },
    azure: {
        title: "Microsoft Azure",
        description: "Microsoft's cloud computing platform with integrated services for compute, analytics, storage, and networking.",
        keyFeatures: [
            "Hybrid cloud capabilities",
            "Enterprise-grade security and compliance",
            "Integrated DevOps with Azure DevOps",
            "AI and machine learning services",
            "Windows and Linux support"
        ],
        coreServices: [
            "Azure VMs: Virtual machines",
            "Azure Kubernetes Service (AKS)",
            "Azure Functions: Serverless compute",
            "Azure DevOps: CI/CD pipelines",
            "Azure Monitor: Observability",
            "Azure Active Directory: Identity management"
        ],
        resources: [
            "Azure Documentation: docs.microsoft.com/azure",
            "Azure Free Account",
            "Azure DevOps Services"
        ]
    },
    gcp: {
        title: "Google Cloud Platform",
        description: "Google's cloud platform with focus on data analytics, machine learning, and open-source technologies.",
        keyFeatures: [
            "Industry-leading data analytics",
            "Machine learning and AI services",
            "Global fiber network",
            "Carbon-neutral cloud platform",
            "Open-source friendly"
        ],
        coreServices: [
            "Google Kubernetes Engine (GKE)",
            "Cloud Functions: Serverless compute",
            "BigQuery: Data warehouse",
            "Cloud Storage: Object storage",
            "Cloud Build: CI/CD",
            "Cloud Monitoring: Observability"
        ],
        resources: [
            "GCP Documentation: cloud.google.com/docs",
            "Google Cloud Free Tier",
            "GCP Training and Certification"
        ]
    },
    ansible: {
        title: "Ansible",
        description: "Ansible is an IT automation tool for configuration management, application deployment, and provisioning.",
        keyFeatures: [
            "Agentless architecture (uses SSH)",
            "YAML-based playbooks (human-readable)",
            "Idempotent operations",
            "Extensive module library",
            "Red Hat supported"
        ],
        useCases: [
            "Configuration management",
            "Application deployment",
            "Continuous delivery",
            "Security and compliance automation"
        ],
        resources: [
            "Ansible Documentation: docs.ansible.com",
            "Ansible Galaxy for roles",
            "Ansible Tower/AWX for enterprise"
        ]
    },
    prometheus: {
        title: "Prometheus",
        description: "Open-source monitoring and alerting toolkit for cloud-native environments.",
        keyFeatures: [
            "Multi-dimensional data model",
            "Powerful query language (PromQL)",
            "Pull model over HTTP",
            "Service discovery integration",
            "Multiple graphing modes"
        ],
        useCases: [
            "Kubernetes monitoring",
            "Service level objectives (SLOs)",
            "Real-time alerting",
            "Capacity planning"
        ],
        resources: [
            "Prometheus Documentation: prometheus.io/docs",
            "Prometheus Querying",
            "Alertmanager for alerts"
        ]
    },
    grafana: {
        title: "Grafana",
        description: "Open-source analytics and monitoring platform for visualizing metrics, logs, and traces.",
        keyFeatures: [
            "Dashboard visualization",
            "Multiple data source support",
            "Alert management",
            "Templating and variables",
            "Plugin ecosystem"
        ],
        useCases: [
            "Metric visualization",
            "Business intelligence",
            "Operational dashboards",
            "Application performance monitoring"
        ],
        resources: [
            "Grafana Documentation: grafana.com/docs",
            "Grafana Dashboards",
            "Grafana Alerting"
        ]
    },
    git: {
        title: "Git",
        description: "Distributed version control system for tracking changes in source code during software development.",
        keyFeatures: [
            "Distributed development",
            "Branching and merging",
            "Staging area",
            "Multiple workflows",
            "Fast and efficient"
        ],
        useCases: [
            "Source code version control",
            "Collaborative development",
            "Code review workflows",
            "Release management"
        ],
        resources: [
            "Git Documentation: git-scm.com/doc",
            "Pro Git Book",
            "GitHub/GitLab/Bitbucket hosting"
        ]
    },
    bitbucket: {
        title: "Bitbucket",
        description: "Git-based source code repository with built-in CI/CD and Jira integration.",
        keyFeatures: [
            "Built-in CI/CD pipelines",
            "Jira and Trello integration",
            "Pull requests with code review",
            "Branch permissions",
            "Git Large File Storage"
        ],
        useCases: [
            "Enterprise Git hosting",
            "CI/CD with Bitbucket Pipelines",
            "Jira integration for tracking",
            "Team collaboration"
        ],
        resources: [
            "Bitbucket Documentation: atlassian.com/bitbucket",
            "Bitbucket Pipelines",
            "Bitbucket Cloud/Server"
        ]
    },
    helm: {
        title: "Helm",
        description: "Package manager for Kubernetes that simplifies application deployment.",
        keyFeatures: [
            "Charts for packaging apps",
            "Release management",
            "Template engine",
            "Repository support",
            "Rollback capability"
        ],
        useCases: [
            "Kubernetes application deployment",
            "Application package management",
            "Environment configuration",
            "Application lifecycle management"
        ],
        resources: [
            "Helm Documentation: helm.sh/docs",
            "Artifact Hub for charts",
            "Helm 3 (latest version)"
        ]
    },
    argocd: {
        title: "ArgoCD",
        description: "Declarative, GitOps continuous delivery tool for Kubernetes.",
        keyFeatures: [
            "GitOps workflow",
            "Automated sync",
            "Multi-cluster management",
            "Web UI and CLI",
            "Rollback and sync waves"
        ],
        useCases: [
            "GitOps deployments",
            "Multi-cluster management",
            "Canary deployments",
            "Application synchronization"
        ],
        resources: [
            "ArgoCD Documentation: argoproj.github.io/argo-cd",
            "ArgoCD Getting Started",
            "ArgoCD Best Practices"
        ]
    },
    elk: {
        title: "ELK Stack",
        description: "Elasticsearch, Logstash, Kibana stack for log aggregation and analysis.",
        keyFeatures: [
            "Log aggregation and analysis",
            "Real-time search",
            "Data visualization",
            "Machine learning features",
            "Security features"
        ],
        useCases: [
            "Centralized logging",
            "Security analytics",
            "Business analytics",
            "Application monitoring"
        ],
        resources: [
            "Elastic Documentation: elastic.co/guide",
            "ELK Stack Tutorials",
            "Kibana Dashboards"
        ]
    },
    vault: {
        title: "Vault",
        description: "Tool for securely accessing secrets like API keys, passwords, certificates.",
        keyFeatures: [
            "Secrets management",
            "Encryption as a service",
            "Dynamic secrets",
            "Lease and revocation",
            "Audit logging"
        ],
        useCases: [
            "Secret management",
            "Database credential rotation",
            "Encryption services",
            "PKI infrastructure"
        ],
        resources: [
            "Vault Documentation: vaultproject.io/docs",
            "Vault Getting Started",
            "Vault Best Practices"
        ]
    },
    splunk: {
        title: "Splunk",
        description: "Platform for searching, monitoring, and analyzing machine-generated data.",
        keyFeatures: [
            "Machine data analytics",
            "Real-time monitoring",
            "Security information",
            "Operational intelligence",
            "Dashboards and reports"
        ],
        useCases: [
            "IT operations monitoring",
            "Security information and event management",
            "Business analytics",
            "Application performance monitoring"
        ],
        resources: [
            "Splunk Documentation: docs.splunk.com",
            "Splunk Tutorials",
            "Splunk Apps"
        ]
    },
    packer: {
        title: "Packer",
        description: "Tool for creating identical machine images for multiple platforms from a single source.",
        keyFeatures: [
            "Multi-platform images",
            "Automated builds",
            "Infrastructure automation",
            "Immutable infrastructure",
            "Template-based configuration"
        ],
        useCases: [
            "Golden image creation",
            "Multi-cloud deployments",
            "Immutable infrastructure",
            "Disaster recovery"
        ],
        resources: [
            "Packer Documentation: packer.io/docs",
            "Packer Templates",
            "Packer Builders"
        ]
    },
    circleci: {
        title: "CircleCI",
        description: "Continuous integration and delivery platform for rapid software development.",
        keyFeatures: [
            "Orbs for reusable configs",
            "Docker layer caching",
            "Parallel execution",
            "SSH debugging",
            "Contexts for secrets"
        ],
        useCases: [
            "Continuous integration",
            "Automated testing",
            "Docker image builds",
            "Mobile app CI/CD"
        ],
        resources: [
            "CircleCI Documentation: circleci.com/docs",
            "CircleCI Orbs",
            "CircleCI API"
        ]
    },
    teamcity: {
        title: "TeamCity",
        description: "Powerful continuous integration server from JetBrains with out-of-the-box features.",
        keyFeatures: [
            "Build chains",
            "VCS integration",
            "Built-in code quality",
            "Parallel builds",
            "Extensible with plugins"
        ],
        useCases: [
            "Enterprise CI/CD",
            "Build automation",
            "Code quality analysis",
            "Deployment automation"
        ],
        resources: [
            "TeamCity Documentation: jetbrains.com/teamcity",
            "TeamCity Plugins",
            "TeamCity Cloud/Server"
        ]
    },
    newrelic: {
        title: "New Relic",
        description: "Application performance monitoring and observability platform.",
        keyFeatures: [
            "Full-stack observability",
            "Real-time monitoring",
            "AI-powered insights",
            "Synthetic monitoring",
            "Error tracking"
        ],
        useCases: [
            "Application performance monitoring",
            "Infrastructure monitoring",
            "Digital experience monitoring",
            "Business analytics"
        ],
        resources: [
            "New Relic Documentation: docs.newrelic.com",
            "New Relic One",
            "New Relic Insights"
        ]
    },
    datadog: {
        title: "Datadog",
        description: "Cloud-scale monitoring and analytics platform for infrastructure, applications, logs.",
        keyFeatures: [
            "Unified observability",
            "Real-user monitoring",
            "Synthetic monitoring",
            "APM and tracing",
            "Log management"
        ],
        useCases: [
            "Cloud infrastructure monitoring",
            "Application performance monitoring",
            "Log management and analysis",
            "Security monitoring"
        ],
        resources: [
            "Datadog Documentation: docs.datadoghq.com",
            "Datadog Integrations",
            "Datadog API"
        ]
    },
    nexus: {
        title: "Nexus Repository",
        description: "Repository manager for binaries and build artifacts with universal support.",
        keyFeatures: [
            "Proxy remote repositories",
            "Host internal repositories",
            "Build integration",
            "Security scanning",
            "High availability"
        ],
        useCases: [
            "Binary artifact management",
            "Docker registry",
            "NPM registry proxy",
            "Maven repository"
        ],
        resources: [
            "Nexus Documentation: help.sonatype.com",
            "Nexus Repository Manager",
            "Nexus IQ for security"
        ]
    },
    jira: {
        title: "Jira",
        description: "Agile project management tool for planning, tracking, and releasing software.",
        keyFeatures: [
            "Scrum and Kanban boards",
            "Advanced roadmaps",
            "Integration with DevOps tools",
            "Custom workflows",
            "Reporting and analytics"
        ],
        useCases: [
            "Agile project management",
            "Bug and issue tracking",
            "Release planning",
            "Team collaboration"
        ],
        resources: [
            "Jira Documentation: atlassian.com/software/jira",
            "Jira Cloud/Data Center",
            "Jira Service Management"
        ]
    },
    confluence: {
        title: "Confluence",
        description: "Collaboration tool for creating, organizing, and discussing work with your team.",
        keyFeatures: [
            "Team documentation",
            "Knowledge base",
            "Project collaboration",
            "Templates and blueprints",
            "Integration with Jira"
        ],
        useCases: [
            "Technical documentation",
            "Project documentation",
            "Knowledge management",
            "Meeting notes and decisions"
        ],
        resources: [
            "Confluence Documentation: atlassian.com/software/confluence",
            "Confluence Templates",
            "Confluence Cloud/Data Center"
        ]
    },
    oracle: {
        title: "Oracle Cloud",
        description: "Enterprise-grade cloud platform with autonomous services, high-performance computing, and focus on database workloads.",
        keyFeatures: [
            "Autonomous Database with self-driving capabilities",
            "Oracle Cloud Infrastructure (OCI) for compute and storage",
            "Exadata Cloud Service for high-performance databases",
            "Built-in security and compliance",
            "Hybrid cloud solutions"
        ],
        coreServices: [
            "OCI Compute: Virtual machines and bare metal",
            "Autonomous Database: Self-driving database",
            "OCI Storage: Object and block storage",
            "Container Engine for Kubernetes (OKE)",
            "Oracle Functions: Serverless computing"
        ],
        useCases: [
            "Enterprise database migration to cloud",
            "High-performance computing workloads",
            "Oracle applications modernization",
            "Hybrid cloud deployments"
        ],
        resources: [
            "Oracle Cloud Documentation: docs.oracle.com/en-us/iaas",
            "Oracle Cloud Free Tier",
            "Oracle Cloud Infrastructure Certification"
        ]
    },
    puppet: {
        title: "Puppet",
        description: "Configuration management tool for automating infrastructure provisioning, configuration, and management.",
        keyFeatures: [
            "Declarative language for infrastructure as code",
            "Model-driven automation",
            "Compliance enforcement and reporting",
            "Role-based access control",
            "Enterprise-scale management"
        ],
        useCases: [
            "Configuration management at scale",
            "Compliance and security automation",
            "Infrastructure drift detection",
            "Multi-platform automation"
        ],
        resources: [
            "Puppet Documentation: puppet.com/docs",
            "Puppet Forge for modules",
            "Puppet Enterprise for large-scale deployments"
        ]
    },
    chef: {
        title: "Chef",
        description: "Automation platform for infrastructure as code with powerful policy management capabilities.",
        keyFeatures: [
            "Policy-based automation with Chef Infra",
            "Ruby-based domain-specific language",
            "Compliance scanning with InSpec",
            "Continuous automation workflows",
            "Enterprise management console"
        ],
        useCases: [
            "Infrastructure automation and compliance",
            "Application deployment automation",
            "Security and compliance scanning",
            "Hybrid cloud management"
        ],
        resources: [
            "Chef Documentation: docs.chef.io",
            "Chef Supermarket for cookbooks",
            "Chef Automate for enterprise management"
        ]
    },
    saltstack: {
        title: "SaltStack",
        description: "Event-driven automation and configuration management tool designed for speed and scalability.",
        keyFeatures: [
            "Event-driven architecture for real-time automation",
            "Remote execution at scale",
            "Configuration management with states",
            "Flexible targeting with grains and pillars",
            "Python-based extensibility"
        ],
        useCases: [
            "Large-scale infrastructure automation",
            "Real-time monitoring and remediation",
            "Cloud infrastructure management",
            "Network device automation"
        ],
        resources: [
            "SaltStack Documentation: docs.saltproject.io",
            "Salt Formulas for reusable configurations",
            "Salt Enterprise for advanced features"
        ]
    },
    istio: {
        title: "Istio",
        description: "Service mesh for managing microservices communication, security, and observability in Kubernetes.",
        keyFeatures: [
            "Traffic management with fine-grained control",
            "Security with automatic mTLS encryption",
            "Observability with metrics, logs, and traces",
            "Policy enforcement and rate limiting",
            "Canary deployments and A/B testing"
        ],
        useCases: [
            "Microservices communication management",
            "Zero-trust security for services",
            "Canary deployments and traffic shifting",
            "Service-level observability"
        ],
        resources: [
            "Istio Documentation: istio.io/latest/docs",
            "Istio by Example tutorials",
            "Istio Community for support"
        ]
    },
    linkerd: {
        title: "Linkerd",
        description: "Lightweight, ultralight service mesh for Kubernetes focused on simplicity and performance.",
        keyFeatures: [
            "Ultralight and fast design",
            "Zero-config mutual TLS (mTLS)",
            "Built-in dashboard for observability",
            "Automatic proxy injection",
            "Simple installation and operation"
        ],
        useCases: [
            "Simple service mesh implementation",
            "Kubernetes service security",
            "Service-level observability",
            "Load balancing and failure handling"
        ],
        resources: [
            "Linkerd Documentation: linkerd.io/docs",
            "Linkerd Getting Started Guide",
            "Linkerd Community for support"
        ]
    },
    openshift: {
        title: "OpenShift",
        description: "Enterprise Kubernetes platform with developer and operations tools built-in for containerized applications.",
        keyFeatures: [
            "Enterprise-grade Kubernetes distribution",
            "Built-in CI/CD pipelines with OpenShift Pipelines",
            "Developer self-service portal",
            "Integrated service mesh with OpenShift Service Mesh",
            "Built-in monitoring and logging"
        ],
        coreServices: [
            "OpenShift Container Platform",
            "OpenShift Serverless (Knative)",
            "OpenShift Pipelines (Tekton)",
            "OpenShift Service Mesh (Istio)",
            "OpenShift GitOps (ArgoCD)"
        ],
        useCases: [
            "Enterprise container platform",
            "Developer platform as a service",
            "Hybrid cloud deployments",
            "Modern application development"
        ],
        resources: [
            "OpenShift Documentation: docs.openshift.com",
            "Red Hat OpenShift Learning Subscription",
            "OpenShift Container Platform"
        ]
    },
    travisci: {
        title: "Travis CI",
        description: "Hosted continuous integration service for building and testing software projects with GitHub integration.",
        keyFeatures: [
            "Deep GitHub integration",
            "Multi-language and platform support",
            "Parallel testing and builds",
            "Build matrix for multiple configurations",
            "Docker and container support"
        ],
        useCases: [
            "Open source project CI/CD",
            "GitHub repository automation",
            "Multi-language project testing",
            "Automated deployment pipelines"
        ],
        resources: [
            "Travis CI Documentation: docs.travis-ci.com",
            "Travis CI Build Configuration Reference",
            "Travis CI Community Forums"
        ]
    },
    bamboo: {
        title: "Bamboo",
        description: "Continuous integration and deployment server that ties automated builds, tests, and releases together.",
        keyFeatures: [
            "Built-in deployment projects",
            "Deep Jira integration",
            "Parallel build agents",
            "Docker and cloud integration",
            "Environment management"
        ],
        useCases: [
            "Enterprise CI/CD pipelines",
            "Jira-integrated deployments",
            "Multi-environment deployments",
            "Build and release automation"
        ],
        resources: [
            "Bamboo Documentation: confluence.atlassian.com/bamboo",
            "Bamboo Server/Data Center",
            "Bamboo Cloud (hosted)"
        ]
    },
    fluentd: {
        title: "Fluentd",
        description: "Open-source data collector for unified logging layer with JSON-based log processing and plugin architecture.",
        keyFeatures: [
            "Unified logging layer",
            "JSON-based log processing",
            "Extensive plugin ecosystem (1000+ plugins)",
            "Reliable forwarding with buffering",
            "Cloud-native design"
        ],
        useCases: [
            "Centralized logging infrastructure",
            "Log aggregation and processing",
            "Real-time log analytics",
            "Multi-destination log routing"
        ],
        resources: [
            "Fluentd Documentation: docs.fluentd.org",
            "Fluentd Plugin Directory",
            "Fluentd Best Practices Guide"
        ]
    },
    loki: {
        title: "Loki",
        description: "Horizontally-scalable, highly-available log aggregation system inspired by Prometheus.",
        keyFeatures: [
            "Prometheus-inspired labeling system",
            "Cost-effective log storage",
            "Native Grafana integration",
            "Simple installation and operation",
            "Kubernetes-native design"
        ],
        useCases: [
            "Kubernetes log aggregation",
            "Cost-effective log management",
            "Prometheus and Grafana ecosystem",
            "Microservices logging"
        ],
        resources: [
            "Loki Documentation: grafana.com/docs/loki/latest",
            "Loki Getting Started",
            "Loki Configuration Guide"
        ]
    },
    sonarqube: {
        title: "SonarQube",
        description: "Automatic code review tool to detect bugs, vulnerabilities, and code smells in multiple programming languages.",
        keyFeatures: [
            "Static code analysis for 30+ languages",
            "Quality gates for project standards",
            "Security vulnerability detection",
            "Code duplication detection",
            "Technical debt management"
        ],
        useCases: [
            "Code quality management",
            "Security scanning in CI/CD",
            "Technical debt tracking",
            "Code review automation"
        ],
        resources: [
            "SonarQube Documentation: docs.sonarqube.org",
            "SonarQube Rules",
            "SonarQube Quality Profiles"
        ]
    },
    selenium: {
        title: "Selenium",
        description: "Portable framework for testing web applications across different browsers and platforms.",
        keyFeatures: [
            "Cross-browser testing",
            "Multiple language bindings (Java, Python, C#, etc.)",
            "Selenium Grid for parallel testing",
            "WebDriver API for browser control",
            "Integration with testing frameworks"
        ],
        useCases: [
            "Web application testing",
            "Cross-browser compatibility testing",
            "Automated regression testing",
            "Continuous testing in CI/CD"
        ],
        resources: [
            "Selenium Documentation: selenium.dev/documentation",
            "Selenium WebDriver API",
            "Selenium Grid for distributed testing"
        ]
    },
    postman: {
        title: "Postman",
        description: "API platform for building and using APIs with features for testing, documentation, and collaboration.",
        keyFeatures: [
            "API testing and automation",
            "Mock servers for API simulation",
            "API documentation generation",
            "Workspace collaboration",
            "Monitoring and alerts"
        ],
        useCases: [
            "API development and testing",
            "API documentation",
            "Automated API testing",
            "API monitoring and health checks"
        ],
        resources: [
            "Postman Documentation: learning.postman.com",
            "Postman API Network",
            "Postman Collection Format"
        ]
    },
    jfrog: {
        title: "JFrog Platform",
        description: "Universal artifact repository manager supporting all major package formats with security and distribution.",
        keyFeatures: [
            "Artifactory for universal artifact management",
            "Xray for security and compliance scanning",
            "Distribution for secure software releases",
            "Pipelines for CI/CD automation",
            "Multi-cloud and hybrid support"
        ],
        useCases: [
            "Universal artifact repository",
            "Software supply chain security",
            "Binary distribution and management",
            "DevOps platform integration"
        ],
        resources: [
            "JFrog Documentation: jfrog.com/help",
            "JFrog Artifactory User Guide",
            "JFrog Xray Security Scanning"
        ]
    },
    alibaba: {
        title: "Alibaba Cloud",
        description: "China's largest cloud provider with global reach, e-commerce focus, and comprehensive cloud services.",
        keyFeatures: [
            "Leading cloud provider in Asia-Pacific",
            "E-commerce and retail optimization",
            "Global infrastructure with 80+ availability zones",
            "Strong AI and big data capabilities",
            "Hybrid cloud solutions"
        ],
        coreServices: [
            "Elastic Compute Service (ECS)",
            "Object Storage Service (OSS)",
            "ApsaraDB for databases",
            "Container Service for Kubernetes (ACK)",
            "Function Compute for serverless"
        ],
        useCases: [
            "E-commerce and retail applications",
            "Asia-Pacific market expansion",
            "AI and big data processing",
            "Hybrid cloud deployments"
        ],
        resources: [
            "Alibaba Cloud Documentation: alibabacloud.com/help",
            "Alibaba Cloud Free Tier",
            "Alibaba Cloud Academy for training"
        ]
    },
    ibm: {
        title: "IBM Cloud",
        description: "Enterprise cloud platform with AI, blockchain, quantum computing, and hybrid cloud capabilities.",
        keyFeatures: [
            "Enterprise-grade cloud services",
            "AI and Watson integration",
            "Blockchain platform services",
            "Quantum computing access",
            "Strong hybrid cloud capabilities"
        ],
        coreServices: [
            "IBM Cloud Kubernetes Service",
            "Watson AI services",
            "IBM Cloud Functions (serverless)",
            "IBM Cloud Databases",
            "IBM Cloud Object Storage"
        ],
        useCases: [
            "Enterprise AI applications",
            "Blockchain solutions",
            "Hybrid cloud deployments",
            "Quantum computing research"
        ],
        resources: [
            "IBM Cloud Documentation: cloud.ibm.com/docs",
            "IBM Cloud Lite (free tier)",
            "IBM Cloud Certification"
        ]
    },
    consul: {
        title: "Consul",
        description: "Service networking solution that enables service discovery, configuration, and secure service-to-service communication.",
        keyFeatures: [
            "Service discovery across any cloud or runtime",
            "Health checking and monitoring",
            "Secure service communication with automatic TLS encryption",
            "Multi-datacenter federation",
            "Service mesh capabilities"
        ],
        useCases: [
            "Microservices service discovery",
            "Secure service-to-service communication",
            "Multi-cloud service networking",
            "Zero-trust network security"
        ],
        resources: [
            "Consul Documentation: consul.io/docs",
            "Consul Getting Started",
            "Consul Service Mesh"
        ]
    },
    nomad: {
        title: "Nomad",
        description: "Simple and flexible workload orchestrator for deploying and managing containers and non-containerized applications across infrastructure.",
        keyFeatures: [
            "Simple, single binary deployment",
            "Multi-cloud and hybrid cloud support",
            "Support for containers, VMs, and standalone applications",
            "Dynamic application scheduling",
            "Built-in service discovery and load balancing"
        ],
        useCases: [
            "Multi-cloud application deployment",
            "Batch processing and big data workloads",
            "Mixed workload orchestration",
            "Edge computing deployments"
        ],
        resources: [
            "Nomad Documentation: nomadproject.io/docs",
            "Nomad Job Specification",
            "Nomad Enterprise Features"
        ]
    },
    rancher: {
        title: "Rancher",
        description: "Complete software stack for teams adopting containers and Kubernetes, providing a centralized management platform.",
        keyFeatures: [
            "Centralized multi-cluster Kubernetes management",
            "Built-in security policies and compliance",
            "Application catalog and Helm chart management",
            "Integrated monitoring and logging",
            "Global security policies"
        ],
        useCases: [
            "Enterprise Kubernetes management",
            "Multi-cluster operations",
            "DevOps platform as a service",
            "Edge computing with Kubernetes"
        ],
        resources: [
            "Rancher Documentation: rancher.com/docs",
            "Rancher Quick Start Guide",
            "Rancher Best Practices"
        ]
    },
    harbor: {
        title: "Harbor",
        description: "Enterprise-class container registry that stores, signs, and scans container images for vulnerabilities.",
        keyFeatures: [
            "Vulnerability scanning with Clair integration",
            "Image replication across multiple registries",
            "Role-based access control (RBAC)",
            "Image signing and content trust",
            "Webhook notifications"
        ],
        useCases: [
            "Enterprise container image management",
            "Software supply chain security",
            "Multi-registry image distribution",
            "Compliance and governance"
        ],
        resources: [
            "Harbor Documentation: goharbor.io/docs",
            "Harbor Installation Guide",
            "Harbor API Reference"
        ]
    },
    tekton: {
        title: "Tekton",
        description: "Kubernetes-native CI/CD framework for building, testing, and deploying applications using custom resources.",
        keyFeatures: [
            "Kubernetes-native pipelines as custom resources",
            "Reusable pipeline components and tasks",
            "Event-driven workflow triggers",
            "Workspace sharing between tasks",
            "Extensible through custom resources"
        ],
        useCases: [
            "Cloud native CI/CD pipelines",
            "Multi-language build automation",
            "GitOps deployment workflows",
            "Test automation in Kubernetes"
        ],
        resources: [
            "Tekton Documentation: tekton.dev/docs",
            "Tekton Catalog",
            "Tekton Triggers"
        ]
    },
    spinnaker: {
        title: "Spinnaker",
        description: "Multi-cloud continuous delivery platform for releasing software changes with high velocity and confidence.",
        keyFeatures: [
            "Multi-cloud deployment strategies",
            "Canary analysis and automated rollbacks",
            "Pipeline as code",
            "Infrastructure management",
            "Deployment verification"
        ],
        useCases: [
            "Enterprise continuous delivery",
            "Multi-cloud application deployment",
            "Canary release strategies",
            "Disaster recovery testing"
        ],
        resources: [
            "Spinnaker Documentation: spinnaker.io/docs",
            "Spinnaker Best Practices",
            "Spinnaker Community"
        ]
    },
    pulumi: {
        title: "Pulumi",
        description: "Modern Infrastructure as Code platform that uses real programming languages to provision cloud infrastructure.",
        keyFeatures: [
            "Use familiar languages: TypeScript, Python, Go, C#",
            "Multi-cloud infrastructure management",
            "State management and secrets",
            "Policy as code with CrossGuard",
            "GitHub Actions and CI/CD integration"
        ],
        useCases: [
            "Multi-cloud infrastructure provisioning",
            "Application deployment with infrastructure",
            "Policy enforcement and compliance",
            "GitOps workflows"
        ],
        resources: [
            "Pulumi Documentation: pulumi.com/docs",
            "Pulumi Examples",
            "Pulumi Policy as Code"
        ]
    },
    cdk: {
        title: "AWS Cloud Development Kit",
        description: "AWS Cloud Development Kit defines cloud infrastructure using familiar programming languages and deploys it with AWS CloudFormation.",
        keyFeatures: [
            "Infrastructure as code with real programming languages",
            "High-level constructs for common patterns",
            "Type safety and IDE support",
            "Integration with AWS services",
            "Custom constructs and sharing"
        ],
        useCases: [
            "AWS infrastructure provisioning",
            "Multi-stack application deployment",
            "Custom AWS resource patterns",
            "Infrastructure testing"
        ],
        resources: [
            "AWS CDK Documentation: docs.aws.amazon.com/cdk",
            "CDK Workshop",
            "CDK Construct Library"
        ]
    },
    crossplane: {
        title: "Crossplane",
        description: "Open source control plane that enables platform teams to assemble infrastructure from multiple vendors and expose higher level self-service APIs.",
        keyFeatures: [
            "Kubernetes-native APIs for cloud services",
            "Multi-cloud resource provisioning",
            "Composition for custom abstractions",
            "Policy and governance enforcement",
            "Self-service infrastructure"
        ],
        useCases: [
            "Platform engineering",
            "Multi-cloud infrastructure management",
            "Internal developer platforms",
            "Infrastructure standardization"
        ],
        resources: [
            "Crossplane Documentation: crossplane.io/docs",
            "Crossplane Concepts",
            "Crossplane Compositions"
        ]
    },
    jaeger: {
        title: "Jaeger",
        description: "Open source, end-to-end distributed tracing system for monitoring and troubleshooting microservices-based architectures.",
        keyFeatures: [
            "Distributed transaction monitoring",
            "Root cause analysis",
            "Service dependency analysis",
            "Performance and latency optimization",
            "OpenTelemetry integration"
        ],
        useCases: [
            "Microservices performance monitoring",
            "Distributed transaction tracing",
            "Service dependency mapping",
            "Performance bottleneck identification"
        ],
        resources: [
            "Jaeger Documentation: jaegertracing.io/docs",
            "Jaeger Architecture",
            "Jaeger Best Practices"
        ]
    },
    zipkin: {
        title: "Zipkin",
        description: "Distributed tracing system that helps gather timing data needed to troubleshoot latency problems in microservice architectures.",
        keyFeatures: [
            "Latency analysis and visualization",
            "Dependency graphs generation",
            "Scalable storage backends",
            "Multiple instrumentation libraries",
            "Web UI for trace exploration"
        ],
        useCases: [
            "Microservices latency analysis",
            "Distributed system debugging",
            "Performance monitoring",
            "Service dependency visualization"
        ],
        resources: [
            "Zipkin Documentation: zipkin.io/pages/tracers_instrumentation",
            "Zipkin Architecture",
            "Zipkin Quickstart"
        ]
    },
    opentelemetry: {
        title: "OpenTelemetry",
        description: "Vendor-neutral observability framework for generating, collecting, and exporting telemetry data (metrics, logs, and traces).",
        keyFeatures: [
            "Unified observability framework",
            "Vendor-neutral APIs and SDKs",
            "Automatic and manual instrumentation",
            "Multiple export formats",
            "CNCF graduated project"
        ],
        useCases: [
            "Application performance monitoring",
            "Distributed tracing implementation",
            "Observability data collection",
            "Multi-vendor telemetry"
        ],
        resources: [
            "OpenTelemetry Documentation: opentelemetry.io/docs",
            "OpenTelemetry Getting Started",
            "OpenTelemetry Instrumentation"
        ]
    },
    cloudwatch: {
        title: "AWS CloudWatch",
        description: "Monitoring and observability service for AWS resources and applications that provides data and actionable insights.",
        keyFeatures: [
            "Metrics collection and visualization",
            "Log aggregation and analysis",
            "Dashboard creation and management",
            "Alarms and notifications",
            "Anomaly detection"
        ],
        useCases: [
            "AWS resource monitoring",
            "Application performance monitoring",
            "Log analysis and troubleshooting",
            "Infrastructure optimization"
        ],
        resources: [
            "CloudWatch Documentation: docs.aws.amazon.com/cloudwatch",
            "CloudWatch Metrics and Alarms",
            "CloudWatch Logs Insights"
        ]
    },
    azuremonitor: {
        title: "Azure Monitor",
        description: "Comprehensive monitoring solution for collecting, analyzing, and acting on telemetry from cloud and on-premises environments.",
        keyFeatures: [
            "Full-stack monitoring",
            "Application performance monitoring",
            "Infrastructure monitoring",
            "Log analytics with KQL",
            "Smart alerts and automated actions"
        ],
        useCases: [
            "Azure resource monitoring",
            "Application performance insights",
            "Infrastructure optimization",
            "Business analytics"
        ],
        resources: [
            "Azure Monitor Documentation: docs.microsoft.com/azure/azure-monitor",
            "Azure Monitor Overview",
            "Azure Monitor Best Practices"
        ]
    },
    stackstorm: {
        title: "StackStorm",
        description: "Event-driven automation platform that wires together existing infrastructure and application environments.",
        keyFeatures: [
            "Event-driven automation with sensors and triggers",
            "ChatOps integration with Slack, Mattermost, etc.",
            "Workflow orchestration with Mistral",
            "Extensible through packs",
            "RBAC and auditing"
        ],
        useCases: [
            "IT operations automation",
            "Security incident response",
            "DevOps automation",
            "Self-service infrastructure"
        ],
        resources: [
            "StackStorm Documentation: docs.stackstorm.com",
            "StackStorm Packs",
            "StackStorm Exchange"
        ]
    },
    backstage: {
        title: "Backstage",
        description: "Open platform for building developer portals and internal development platforms, created by Spotify.",
        keyFeatures: [
            "Service catalog for microservices",
            "Software templates for project creation",
            "TechDocs for documentation",
            "Plugins for extensibility",
            "CI/CD integration"
        ],
        useCases: [
            "Developer portal creation",
            "Internal platform engineering",
            "Service discovery and documentation",
            "Developer productivity"
        ],
        resources: [
            "Backstage Documentation: backstage.io/docs",
            "Backstage Plugins",
            "Backstage Getting Started"
        ]
    },
    cortex: {
        title: "Cortex",
        description: "Horizontally scalable, highly available, multi-tenant Prometheus monitoring system with long-term storage.",
        keyFeatures: [
            "100% Prometheus compatible",
            "Long-term metrics storage",
            "High availability and scalability",
            "Multi-tenancy support",
            "Global query federation"
        ],
        useCases: [
            "Large-scale Prometheus deployments",
            "Long-term metric retention",
            "Multi-tenant monitoring",
            "Enterprise observability"
        ],
        resources: [
            "Cortex Documentation: cortexmetrics.io/docs",
            "Cortex Architecture",
            "Cortex Operations"
        ]
    },
    thanos: {
        title: "Thanos",
        description: "Highly available Prometheus setup with long-term storage capabilities and global query view.",
        keyFeatures: [
            "Global query view across clusters",
            "Unlimited metric retention",
            "Downsampling and compaction",
            "High availability",
            "Multi-cluster federation"
        ],
        useCases: [
            "Multi-cluster Prometheus",
            "Long-term metric storage",
            "Global observability",
            "Cost-effective monitoring"
        ],
        resources: [
            "Thanos Documentation: thanos.io/tip/thanos",
            "Thanos Getting Started",
            "Thanos Components"
        ]
    },
    kiali: {
        title: "Kiali",
        description: "Observability console for Istio service mesh with service topology, health, and configuration validation.",
        keyFeatures: [
            "Service mesh visualization",
            "Traffic monitoring and metrics",
            "Istio configuration validation",
            "Distributed tracing integration",
            "Multi-cluster support"
        ],
        useCases: [
            "Istio service mesh observability",
            "Microservices traffic monitoring",
            "Service mesh configuration validation",
            "Performance troubleshooting"
        ],
        resources: [
            "Kiali Documentation: kiali.io/documentation",
            "Kiali Installation",
            "Kiali Features"
        ]
    },
    keycloak: {
        title: "Keycloak",
        description: "Open source identity and access management solution for modern applications and services.",
        keyFeatures: [
            "Single sign-on (SSO)",
            "Identity brokering and social login",
            "User federation with LDAP and Active Directory",
            "Adaptable authentication flows",
            "Admin console and account management"
        ],
        useCases: [
            "Application authentication and authorization",
            "Enterprise single sign-on",
            "Social login integration",
            "Identity federation"
        ],
        resources: [
            "Keycloak Documentation: keycloak.org/docs",
            "Keycloak Server Administration",
            "Keycloak Themes"
        ]
    },
    opa: {
        title: "Open Policy Agent",
        description: "Open source, general-purpose policy engine that enables unified, context-aware policy enforcement.",
        keyFeatures: [
            "Unified policy enforcement across stack",
            "Rego policy language",
            "Kubernetes admission control",
            "API authorization",
            "Terraform policy validation"
        ],
        useCases: [
            "Kubernetes admission control",
            "API authorization",
            "Infrastructure compliance",
            "Data filtering and validation"
        ],
        resources: [
            "OPA Documentation: openpolicyagent.org/docs",
            "Rego Policy Language",
            "OPA Gatekeeper"
        ]
    },
    falco: {
        title: "Falco",
        description: "Cloud native runtime security project for intrusion and anomaly detection in containers and Kubernetes.",
        keyFeatures: [
            "Runtime security monitoring",
            "Anomaly detection with rules engine",
            "Container and Kubernetes aware",
            "eBPF-based system call monitoring",
            "Alerting and notifications"
        ],
        useCases: [
            "Container runtime security",
            "Kubernetes security monitoring",
            "Intrusion detection",
            "Compliance auditing"
        ],
        resources: [
            "Falco Documentation: falco.org/docs",
            "Falco Rules",
            "Falco Installation"
        ]
    },
    trivy: {
        title: "Trivy",
        description: "Simple and comprehensive vulnerability scanner for containers and other artifacts, suitable for CI/CD.",
        keyFeatures: [
            "Container image vulnerability scanning",
            "Misconfiguration detection",
            "CI/CD integration",
            "Multiple OS package support",
            "Secret detection"
        ],
        useCases: [
            "Container security scanning",
            "CI/CD security integration",
            "Infrastructure as code scanning",
            "Compliance checking"
        ],
        resources: [
            "Trivy Documentation: aquasecurity.github.io/trivy",
            "Trivy Installation",
            "Trivy CI/CD Integration"
        ]
    },
    flux: {
        title: "Flux",
        description: "GitOps tool for keeping Kubernetes clusters in sync with configuration sources and automating updates.",
        keyFeatures: [
            "GitOps for Kubernetes",
            "Multi-tenancy support",
            "Notification system",
            "Dependency management",
            "Health assessment"
        ],
        useCases: [
            "Kubernetes GitOps workflows",
            "Continuous deployment to Kubernetes",
            "Configuration management",
            "Multi-environment synchronization"
        ],
        resources: [
            "Flux Documentation: fluxcd.io/docs",
            "Flux Getting Started",
            "Flux GitOps Toolkit"
        ]
    },
    chaosmesh: {
        title: "Chaos Mesh",
        description: "Cloud native chaos engineering platform for Kubernetes that orchestrates chaos experiments.",
        keyFeatures: [
            "Multi-type fault injection",
            "Kubernetes-native design",
            "Web-based dashboard",
            "Fine-grained chaos control",
            "Safety mechanisms"
        ],
        useCases: [
            "Kubernetes resilience testing",
            "Chaos engineering experiments",
            "System failure simulation",
            "Disaster recovery testing"
        ],
        resources: [
            "Chaos Mesh Documentation: chaos-mesh.org/docs",
            "Chaos Mesh Examples",
            "Chaos Mesh Dashboard"
        ]
    },
    litmus: {
        title: "LitmusChaos",
        description: "Open source chaos engineering platform for cloud native infrastructure with extensible chaos experiments.",
        keyFeatures: [
            "Chaos experiments catalog",
            "Kubernetes-native chaos orchestration",
            "Chaos hub for experiment sharing",
            "GitOps for chaos",
            "Observability integration"
        ],
        useCases: [
            "Cloud native chaos engineering",
            "Kubernetes resilience testing",
            "Chaos experiments as code",
            "Platform reliability validation"
        ],
        resources: [
            "Litmus Documentation: docs.litmuschaos.io",
            "Litmus Chaos Hub",
            "Litmus Quick Start"
        ]
    },
    skaffold: {
        title: "Skaffold",
        description: "Command line tool that facilitates continuous development for Kubernetes applications by handling build and deploy workflows.",
        keyFeatures: [
            "Local development workflow",
            "Continuous deployment to Kubernetes",
            "Build and deploy automation",
            "Profile-based configurations",
            "Port forwarding and logging"
        ],
        useCases: [
            "Kubernetes local development",
            "Inner-loop development",
            "CI/CD pipeline creation",
            "Multi-service development"
        ],
        resources: [
            "Skaffold Documentation: skaffold.dev/docs",
            "Skaffold Examples",
            "Skaffold Configuration"
        ]
    },
    tilt: {
        title: "Tilt",
        description: "Local development tool for building, testing, and debugging microservices with live updates and intelligent rebuilds.",
        keyFeatures: [
            "Fast local development with live updates",
            "Intelligent rebuild and redeploy",
            "Microservices dependency management",
            "Resource utilization optimization",
            "Team collaboration features"
        ],
        useCases: [
            "Microservices development",
            "Local Kubernetes development",
            "Team development environment",
            "Service dependency management"
        ],
        resources: [
            "Tilt Documentation: docs.tilt.dev",
            "Tilt Tutorials",
            "Tilt Extensions"
        ]
    },
    buildah: {
        title: "Buildah",
        description: "Tool for building OCI container images that doesn't require a container daemon and provides low-level control.",
        keyFeatures: [
            "Daemonless container builds",
            "Rootless builds for security",
            "Dockerfile compatible",
            "Low-level image manipulation",
            "Integration with Podman"
        ],
        useCases: [
            "Secure container image building",
            "CI/CD pipeline image creation",
            "Custom image build workflows",
            "Rootless container operations"
        ],
        resources: [
            "Buildah Documentation: buildah.io",
            "Buildah Tutorial",
            "Buildah Commands"
        ]
    },
    podman: {
        title: "Podman",
        description: "Daemonless container engine for developing, managing, and running containers and pods on Linux systems.",
        keyFeatures: [
            "Daemonless architecture",
            "Rootless containers for security",
            "Pod support like Kubernetes",
            "Docker-compatible CLI",
            "Systemd integration"
        ],
        useCases: [
            "Container runtime without daemon",
            "Secure container operations",
            "Kubernetes pod development",
            "System container management"
        ],
        resources: [
            "Podman Documentation: podman.io/docs",
            "Podman Commands",
            "Podman vs Docker"
        ]
    },
    cilium: {
        title: "Cilium",
        description: "eBPF-based networking, security, and observability platform for cloud native deployments like Kubernetes.",
        keyFeatures: [
            "eBPF-powered data plane",
            "Network security policies with identity awareness",
            "Load balancing and service mesh",
            "Observability and monitoring",
            "Multi-cluster networking"
        ],
        useCases: [
            "Kubernetes network security",
            "Service mesh implementation",
            "Network observability",
            "Multi-cluster connectivity"
        ],
        resources: [
            "Cilium Documentation: docs.cilium.io",
            "Cilium Getting Started",
            "Cilium eBPF Datapath"
        ]
    },
    linux: {
        title: "Linux",
        description: "Open-source Unix-like operating system kernel that forms the basis for most cloud infrastructure, containers, and servers worldwide.",
        keyFeatures: [
            "Kernel for servers, cloud, and embedded systems",
            "Shell scripting with Bash, Zsh, and other shells",
            "System administration and automation",
            "Security features and permissions model",
            "Package management systems (apt, yum, dnf)"
        ],
        distributions: [
            "Ubuntu: Most popular for cloud and containers",
            "CentOS/RHEL: Enterprise stability and support",
            "Debian: Stable and reliable server OS",
            "Alpine: Minimal for containers",
            "Fedora: Cutting-edge features"
        ],
        useCases: [
            "Cloud server infrastructure",
            "Container host operating system",
            "Web server deployment",
            "Network infrastructure",
            "Development environments"
        ],
        resources: [
            "Linux Kernel Documentation: kernel.org/doc",
            "Linux Foundation Training",
            "Red Hat Certified Engineer (RHCE)",
            "LPIC Linux Certification"
        ]
    },
    ubuntu: {
        title: "Ubuntu",
        description: "Debian-based Linux distribution developed by Canonical, widely used in cloud computing, containers, and server environments.",
        keyFeatures: [
            "Long-term support (LTS) releases every 2 years",
            "Snap package management system",
            "Cloud-optimized images for AWS, Azure, GCP",
            "Container-ready with Docker and Kubernetes support",
            "Active community and commercial support"
        ],
        versions: [
            "Ubuntu Server: Optimized for server workloads",
            "Ubuntu Desktop: Developer workstation",
            "Ubuntu Core: IoT and embedded systems",
            "Cloud Images: Pre-optimized for cloud platforms"
        ],
        useCases: [
            "Cloud infrastructure deployment",
            "Container host operating system",
            "Web application servers",
            "Development and testing environments",
            "CI/CD pipeline infrastructure"
        ],
        resources: [
            "Ubuntu Documentation: ubuntu.com/server/docs",
            "Ubuntu Pro: Extended security maintenance",
            "Canonical Livepatch: Kernel updates without reboot",
            "MAAS: Metal as a Service for bare-metal provisioning"
        ]
    },
    centos: {
        title: "CentOS/RHEL",
        description: "Enterprise Linux distributions known for stability, long-term support, and compatibility with Red Hat Enterprise Linux.",
        keyFeatures: [
            "Enterprise-grade stability and predictability",
            "10-year support lifecycle for major versions",
            "YUM/DNF package management system",
            "SELinux for enhanced security",
            "Systemd for service management"
        ],
        ecosystem: [
            "Red Hat Enterprise Linux (RHEL): Commercial version",
            "CentOS Stream: Rolling development version",
            "Rocky Linux: Community fork of CentOS",
            "AlmaLinux: RHEL-compatible community OS"
        ],
        useCases: [
            "Enterprise server infrastructure",
            "Mission-critical applications",
            "Financial and government systems",
            "Long-term stable deployments",
            "Legacy application support"
        ],
        resources: [
            "Red Hat Documentation: access.redhat.com/documentation",
            "CentOS Wiki: wiki.centos.org",
            "Red Hat Certified System Administrator (RHCSA)",
            "Red Hat Certified Engineer (RHCE)"
        ]
    },
    bash: {
        title: "Bash Scripting",
        description: "Bourne Again Shell scripting language for Unix/Linux system administration, automation, and command-line tool development.",
        keyFeatures: [
            "Shell scripting for automation tasks",
            "Command-line interface for system administration",
            "Pipeline and redirection operators",
            "Variables, conditionals, loops, and functions",
            "Job control and process management"
        ],
        scriptingFeatures: [
            "Command substitution and expansion",
            "Arrays and associative arrays",
            "Regular expression matching",
            "Trap signals for cleanup",
            "Here documents and strings"
        ],
        useCases: [
            "System administration automation",
            "Deployment and provisioning scripts",
            "Log analysis and processing",
            "CI/CD pipeline scripts",
            "Infrastructure management"
        ],
        resources: [
            "Bash Reference Manual: gnu.org/software/bash/manual",
            "Advanced Bash-Scripting Guide: tldp.org/LDP/abs/html",
            "Bash Hackers Wiki: wiki.bash-hackers.org",
            "ShellCheck: Static analysis for shell scripts"
        ]
    },
    python: {
        title: "Python",
        description: "High-level, interpreted programming language known for its simplicity and versatility in automation, data analysis, and DevOps tooling.",
        keyFeatures: [
            "Simple and readable syntax",
            "Extensive standard library",
            "Cross-platform compatibility",
            "Strong community and ecosystem",
            "Integration with C/C++ libraries"
        ],
        devopsLibraries: [
            "Fabric/Invoke: Remote execution and deployment",
            "Ansible: Configuration management (Python-based)",
            "Boto3: AWS SDK for Python",
            "Paramiko: SSH2 protocol library",
            "Requests: HTTP library for APIs"
        ],
        useCases: [
            "Infrastructure automation scripts",
            "API integration and web scraping",
            "Data processing and analysis",
            "Testing and quality assurance",
            "Monitoring and alerting systems"
        ],
        resources: [
            "Python Documentation: docs.python.org",
            "Real Python Tutorials: realpython.com",
            "Automate the Boring Stuff with Python",
            "Python DevOps: Using Python for DevOps"
        ]
    },
    golang: {
        title: "Go (Golang)",
        description: "Statically typed, compiled programming language designed for simplicity, efficiency, and reliability in building scalable software.",
        keyFeatures: [
            "Fast compilation and execution",
            "Built-in concurrency with goroutines",
            "Static linking producing single binaries",
            "Garbage collection with low latency",
            "Simple and consistent language design"
        ],
        devopsTools: [
            "Docker: Container runtime (written in Go)",
            "Kubernetes: Container orchestration (Go)",
            "Terraform: Infrastructure as Code (Go)",
            "Prometheus: Monitoring system (Go)",
            "Hugo: Static site generator (Go)"
        ],
        useCases: [
            "Cloud native tool development",
            "High-performance microservices",
            "CLI tool development",
            "Network servers and proxies",
            "Infrastructure automation tools"
        ],
        resources: [
            "Go Documentation: golang.org/doc",
            "The Go Programming Language book",
            "Go by Example: gobyexample.com",
            "Awesome Go: awesome-go.com"
        ]
    },
    nodejs: {
        title: "Node.js",
        description: "JavaScript runtime built on Chrome's V8 engine for building scalable network applications and command-line tools.",
        keyFeatures: [
            "Event-driven, non-blocking I/O model",
            "npm package manager with largest ecosystem",
            "Single-threaded with event loop",
            "Cross-platform compatibility",
            "Large module ecosystem"
        ],
        devopsTools: [
            "Webpack: Module bundler",
            "Babel: JavaScript compiler",
            "Express: Web application framework",
            "Socket.io: Real-time communication",
            "PM2: Process manager"
        ],
        useCases: [
            "CLI tool development",
            "Build tools and task runners",
            "API servers and microservices",
            "Real-time applications",
            "Scripting and automation"
        ],
        resources: [
            "Node.js Documentation: nodejs.org/docs",
            "npm Documentation: docs.npmjs.com",
            "Node.js Design Patterns book",
            "Node.js Best Practices"
        ]
    },
    yaml: {
        title: "YAML",
        description: "Human-readable data serialization language commonly used for configuration files in DevOps tools and infrastructure as code.",
        keyFeatures: [
            "Human-readable and writable format",
            "Supports complex data structures",
            "Integrates well with programming languages",
            "Minimal syntax with significant whitespace",
            "Supports comments and document separation"
        ],
        devopsUsage: [
            "Kubernetes manifests and configurations",
            "Ansible playbooks and inventories",
            "Docker Compose files",
            "CI/CD pipeline configurations",
            "Infrastructure as Code definitions"
        ],
        useCases: [
            "Application configuration files",
            "Infrastructure definitions",
            "Pipeline definitions",
            "Deployment specifications",
            "Test configuration files"
        ],
        resources: [
            "YAML Specification: yaml.org/spec",
            "YAML Lint: yamllint.com",
            "Online YAML Parser and Validator",
            "YAML Best Practices"
        ]
    }
};

// DOM Elements
const toolCards = document.querySelectorAll('.tool-card');
const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');
const closeModalBtn = document.getElementById('closeModal');
const categoryButtons = document.querySelectorAll('.category-btn');

// Event Listeners for Tool Cards
toolCards.forEach(card => {
    const moreInfoBtn = card.querySelector('.more-info-btn');
    const toolName = card.getAttribute('data-tool');
    
    moreInfoBtn.addEventListener('click', () => {
        openModal(toolName);
    });
    
    // Also allow clicking the entire card to open modal (optional)
    card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('more-info-btn') && 
            !e.target.classList.contains('tag') &&
            !e.target.parentElement.classList.contains('tag') &&
            !e.target.classList.contains('tool-logo')) {
            openModal(toolName);
        }
    });
});

// Category Filtering
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const category = button.getAttribute('data-category');
        filterTools(category);
    });
});

// Filter Tools Function
function filterTools(category) {
    const tools = document.querySelectorAll('.tool-card');
    
    tools.forEach(tool => {
        if (category === 'all' || tool.getAttribute('data-category') === category) {
            tool.style.display = 'flex';
            tool.style.animation = 'fadeIn 0.5s ease';
        } else {
            tool.style.display = 'none';
        }
    });
}

// Open Modal Function
function openModal(toolName) {
    const tool = toolData[toolName];
    
    if (!tool) {
        console.error(`No data found for tool: ${toolName}`);
        return;
    }
    
    modalTitle.textContent = tool.title;
    
    // Create modal content based on tool
    let contentHTML = `
        <div class="modal-tool-info">
            <p class="modal-description">${tool.description}</p>
            
            <div class="modal-section">
                <h3>Key Features</h3>
                <ul class="modal-list">
                    ${tool.keyFeatures ? tool.keyFeatures.map(feature => `<li>${feature}</li>`).join('') : ''}
                    ${tool.coreServices ? tool.coreServices.map(service => `<li>${service}</li>`).join('') : ''}
                </ul>
            </div>
            
            ${tool.useCases ? `
            <div class="modal-section">
                <h3>Use Cases</h3>
                <ul class="modal-list">
                    ${tool.useCases.map(useCase => `<li>${useCase}</li>`).join('')}
                </ul>
            </div>
            ` : ''}
            
            <div class="modal-section">
                <h3>Resources</h3>
                <ul class="modal-list">
                    ${tool.resources.map(resource => `<li>${resource}</li>`).join('')}
                </ul>
            </div>
            
            <div class="modal-note">
                <i class="fas fa-lightbulb"></i>
                <div>
                    <strong>Pro Tip:</strong> This tool is essential for modern DevOps practices and highly sought after by employers. 
                    ${getProTip(toolName)}
                </div>
            </div>
        </div>
    `;
    
    modalContent.innerHTML = contentHTML;
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Get Pro Tip based on tool
function getProTip(toolName) {
    const tips = {
        docker: "Master Docker Compose for local development and Docker Swarm for small-scale orchestration.",
        kubernetes: "Learn kubectl commands thoroughly and understand Pods, Deployments, and Services concepts.",
        terraform: "Use Terraform modules for reusable infrastructure and always run 'terraform plan' before apply.",
        jenkins: "Master Jenkins Pipeline as Code (Jenkinsfile) and use shared libraries for reusable code.",
        "github-actions": "Use composite actions and reusable workflows to avoid duplication in your workflows.",
        gitlab: "Leverage Auto DevOps for quick setup and review apps for preview environments.",
        aws: "Start with AWS Free Tier and focus on core services: EC2, S3, IAM, and VPC.",
        azure: "Use Azure DevOps for integrated CI/CD and take advantage of hybrid cloud features.",
        gcp: "Focus on GKE for Kubernetes and BigQuery for data analytics - Google's strengths.",
        ansible: "Use Ansible Galaxy roles for common tasks and create idempotent playbooks.",
        prometheus: "Learn PromQL thoroughly and use Grafana for visualization alongside Prometheus.",
        git: "Master branching strategies (Git Flow, GitHub Flow) and learn interactive rebase.",
        helm: "Use Helm charts for package management and Helmfile for environment management."
    };
    
    return tips[toolName] || "Gain hands-on experience through personal projects and contribute to open-source.";
}

// Close Modal Function
function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event Listeners for Modal
closeModalBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});

// Add some interactivity to cards
toolCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const tool = card.getAttribute('data-tool');
        const colors = {
            docker: '#2496ed',
            kubernetes: '#326ce5',
            terraform: '#7b42bc',
            jenkins: '#d33834',
            'github-actions': '#181717',
            aws: '#ff9900',
            azure: '#0078d4',
            gcp: '#4285f4',
            ansible: '#e00',
            prometheus: '#e6522c',
            grafana: '#f46800',
            git: '#f05032',
            bitbucket: '#0052cc',
            helm: '#0f1689',
            argocd: '#ef7b4d',
            elk: '#005571',
            vault: '#000000',
            splunk: '#000000',
            packer: '#1daeff',
            circleci: '#343434',
            teamcity: '#000000',
            newrelic: '#1ce783',
            datadog: '#632ca6',
            nexus: '#3a75bd',
            jira: '#0052cc',
            confluence: '#172b4d'
        };
        
        card.style.borderTop = `4px solid ${colors[tool] || '#3b82f6'}`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.borderTop = 'none';
    });
});

// Add animation to stats counter
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const originalText = stat.textContent;
        const isPercentage = originalText.includes('%');
        const target = parseInt(originalText);
        
        if (isNaN(target)) return;
        
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = originalText;
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(current) + (isPercentage ? '%' : '');
            }
        }, 30);
    });
}

// Trigger stats animation when page loads
window.addEventListener('load', () => {
    setTimeout(animateStats, 500);
    
    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .modal-tool-info {
            line-height: 1.7;
        }
        
        .modal-description {
            font-size: 1.1rem;
            margin-bottom: 25px;
            padding-bottom: 20px;
            border-bottom: 1px solid #e2e8f0;
        }
        
        .modal-section {
            margin-bottom: 25px;
        }
        
        .modal-section h3 {
            font-size: 1.3rem;
            color: #1e293b;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .modal-section h3:before {
            content: "▸";
            color: #3b82f6;
        }
        
        .modal-list {
            list-style-type: none;
            padding-left: 20px;
        }
        
        .modal-list li {
            padding: 8px 0;
            padding-left: 25px;
            position: relative;
        }
        
        .modal-list li:before {
            content: "•";
            color: #3b82f6;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        
        .modal-note {
            background-color: #f0f9ff;
            padding: 18px;
            border-radius: 10px;
            margin-top: 25px;
            border-left: 4px solid #3b82f6;
            display: flex;
            align-items: flex-start;
            gap: 12px;
        }
        
        .modal-note i {
            color: #3b82f6;
            font-size: 1.2rem;
            margin-top: 2px;
        }
        
        .modal-note strong {
            color: #1e40af;
        }
    `;
    document.head.appendChild(style);
});

// Search functionality (optional enhancement)
document.addEventListener('DOMContentLoaded', function() {
    // Create search input if needed
    const searchHTML = `
        <div class="search-container">
            <input type="text" id="toolSearch" placeholder="Search DevOps tools...">
            <i class="fas fa-search"></i>
        </div>
    `;
    
    // Add search to header if you want
    // document.querySelector('.header-content').insertAdjacentHTML('beforeend', searchHTML);
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});