Each folder inside comp_packs contains both html display layer and service files.

Purpose of this folder is to create ready to use modules for future projects.

A comp_pack looks like this:

comp_pack_name
├── README.md
├── ModuleComponent.vue
├── ModuleService.vue

When import module, paste the module folder inside anywhere of the project, and import the moduleComponent in to project component, the service file should be automatically loaded.
