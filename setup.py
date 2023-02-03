import setuptools
from setuptools import setup
from setuptools.command.develop import develop
from setuptools.command.install import install
from subprocess import check_call
import pkg.init


with open("README.rst", "r") as fh:
    long_description = fh.read()

class PreInstallCommand(install):
    """Pre-installation for install mode."""
    def run(self):
        check_call("pip install -r requirements.txt".split())
        pkg.init.installer_script()
        install.run(self)
        
class PreDevelopCommand(develop):
    """Pre-installation for install mode."""
    def run(self):
        check_call("pip install -r requirements.txt".split())
        pkg.init.installer_script()
        develop.run(self)


setuptools.setup(
    name="PKG", # Replace with your own username
    version="1.0.0",
    author="Chuming Chen",
    author_email="chenc@udel.edu",
    description="A Python project that integrates protein related biological and biomedical databases into a knowledge graph.",
    long_description=long_description,
    long_description_content_type='text/x-rst',
    url="github.com/udel-cbcb/PKG",
    packages=setuptools.find_packages(),
    cmdclass={
        'develop': PreDevelopCommand,
        'install': PreInstallCommand,
    },
    entry_points={'console_scripts': [
        #'pkg_app=pkg.report_manager.index:main',
        'pkg_debug=pkg.debug:main',
        'pkg_build=pkg.graphdb_builder.builder.builder:run_full_update',
        #'pkg_update_textmining=pkg.graphdb_builder.builder.builder:update_textmining'
    ]},
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires='==3.9.11',
    include_package_data=True,
)
