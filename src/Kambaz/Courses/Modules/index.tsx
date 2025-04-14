import { useState, useEffect } from "react";
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { useParams } from "react-router";
import * as coursesClient from "../client";
import * as modulesClient from "./client";
import {
  setModules,
  addModule,
  editModule,
  updateModule,
  deleteModule,
} from "./reducer";
import { useSelector, useDispatch } from "react-redux";

export default function Modules() {
  const { cid } = useParams();
  const fetchModulesForCourse = async () => {
    const modules = await coursesClient.findModulesForCourse(cid!);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModulesForCourse();
  }, [cid]);

  const deleteModuleHandler = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };

  const addModuleHandler = async () => {
    const newModule = await coursesClient.createModuleForCourse(cid!, {
      name: moduleName,
      course: cid,
    });
    dispatch(addModule(newModule));
    setModuleName("");
  };

  const updateModuleHandler = async (module: any) => {
    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
  };

  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();
  const [moduleName, setModuleName] = useState("");
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div className="d-flex flex-column">
      {currentUser && currentUser.role === "FACULTY" && (
        <ModulesControls
          setModuleName={setModuleName}
          moduleName={moduleName}
          addModule={addModuleHandler}
        />
      )}
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        {modules.map((module: any) => (
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary align-items-center d-flex">
              <BsGripVertical className="me-2 fs-3" />
              {!module.editing && module.name}
              {module.editing && (
                <input
                  className="form-control w-50 d-inline-block"
                  onChange={(e) =>
                    updateModuleHandler({ ...module, name: e.target.value })
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      updateModuleHandler({ ...module, editing: false });
                    }
                  }}
                  defaultValue={module.name}
                />
              )}
              <div className="d-flex align-items-center ms-auto float-end">
                {currentUser && currentUser.role === "FACULTY" && (
                  <ModuleControlButtons
                    moduleId={module._id}
                    deleteModule={(moduleId) => deleteModuleHandler(moduleId)}
                    editModule={(moduleId) => dispatch(editModule(moduleId))}
                  />
                )}
              </div>
            </div>
            {module.lessons && (
              <ul className="wd-lessons list-group rounded-0">
                {module.lessons.map((lesson: any) => (
                  <li className="wd-lesson list-group-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" />
                    {lesson.name}
                    {currentUser && currentUser.role === "FACULTY" && (
                      <LessonControlButtons />
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
