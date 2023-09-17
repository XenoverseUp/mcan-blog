import { Resources } from "@/lib/db/prisma"
import { UserRole } from "@prisma/client"
import { AccessControl } from "accesscontrol"

const rbac = new AccessControl()

rbac.grant(UserRole.READER).read(Resources.POST).read(Resources.SNIPPET)

rbac.grant(UserRole.EDITOR).extend(UserRole.READER)

rbac
  .grant(UserRole.ADMIN)
  .extend(UserRole.EDITOR)
  .read(Resources.DASHBOARD_META)
  .create(Resources.POST)
  .read(Resources.POST)
  .delete(Resources.POST)
  .update(Resources.POST)
  .create(Resources.SNIPPET)
  .read(Resources.SNIPPET)
  .delete(Resources.SNIPPET)
  .update(Resources.SNIPPET)

export default rbac
