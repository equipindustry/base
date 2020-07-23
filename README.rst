|Build Status| |GitHub issues| |GitHub license|

Base Project

:Version: 0.0.0
:Web: https://github.com/equipindustry/base
:Download: https://github.com/equipindustry/base
:Source: https://github.com/equipindustry/base
:Keywords: base

.. contents:: Table of Contents:
    :local:

Base
====

    Main EquipIndustry's Base

License
-------

The code in this repository is licensed under the AGPL 3.0 unless
otherwise noted.

Please see LICENSE_ for details.

How To Contribute
-----------------

Contributions are very welcome.

Please read `How To Contribute` CONTRIBUTING_ for details.

Issue report template should be automatically applied if you are sending it from github UI as well; otherwise you
can find it at `ISSUE_TEMPLATE.md <https://github.com/equipindustry/base/blob/master/.jira/issue_templates/ISSUE_TEMPLATE.md>`_

Reporting Security Issues
-------------------------

Please do not report security issues in public. Please email security@equipindustry.com.

Requirements
------------

This is a list of applications that need to be installed previously to
enjoy all the goodies of this configuration:

- `Pyenv`_
- `Docker`_
- `Tfenv`_
- `Terragrunt`_
- `terraform-docs`_

or

- `zsh-pyenv`_
- `zsh-docker`_
- `zsh-tfenv`_


Quickstart
----------

Project Start
^^^^^^^^^^^^^

.. code-block:: bash

    $ make setup

Troubleshooting
---------------

Wrong pre-commit with pyenv
^^^^^^^^^^^^^^^^^^^^^^^^^^^

Execute the next:

.. code:: bash

    pyenv shell 3.8.0


License
=======

GNU

Changelog
---------

Please see `CHANGELOG`_ for more information what
has changed recently.

Contributing
------------

Please see `CONTRIBUTING`_ for details.


Versioning
----------

Releases are managed using github release feature. We use [Semantic Versioning](http://semver.org) for all
the releases. Every change made to the code base will be referred to in the release notes (except for
cleanups and refactorings).

Credits
-------

-  `CONTRIBUTORS`_

Made with :heart: :coffee: and :pizza: by `equipindustry`_.

.. |license| image:: https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square
    :target: LICENSE
    :alt: License

.. Links
.. _`CHANGELOG`: CHANGELOG.rst
.. _`RELEASING`: docs/source/RELEASING.rst
.. _`TESTING`: docs/source/TESTING.rst
.. _`CONTRIBUTORS`: docs/source/AUTHORS.rst
.. _`CONTRIBUTING`: docs/source/CONTRIBUTING.rst
.. _`LICENSE`: LICENSE
.. _`TROUBLESHOOTING`: docs/source/TROUBLESHOOTING.rst

.. _`PULL_REQUEST_TEMPLATE`: .github.com/PULL_REQUEST_TEMPLATE.md
.. _`ISSUE_TEMPLATE`: .github.com/ISSUE_TEMPLATE.md

.. _`How To Contribute`: docs/source/CONTRIBUTING.rst

.. _`equipindustry`: https://github.com/equipindustry

.. |Build Status| image:: https://travis-ci.org/equipindustry/base.svg
    :target: https://travis-ci.org/equipindustry/base
.. |GitHub issues| image:: https://img.shields.io/github/issues/equipindustry/base.svg
    :target: https://github.com/equipindustry/base/issues
.. |GitHub license| image:: https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square
    :target: LICENSE

.. dependences

.. _`Pyenv`: https://github.com/pyenv/pyenv
.. _`Docker`: https://www.docker.com/
.. _`Tfenv`: https://github.com/tfutils/tfenv
.. _`Terragrunt`: https://github.com/gruntwork-io/terragrunt
.. _`Terraform-docs`: https://github.com/segmentio/terraform-docs

..
   plugin for zsh

.. _`zsh-nvm`: https://github.com/equipindustry/zsh-nvm
.. _`zsh-pyenv`: https://github.com/luismayta/zsh-pyenv
.. _`zsh-docker`: https://github.com/luismayta/zsh-docker
.. _`zsh-tfenv`: https://github.com/luismayta/zsh-tfenv
