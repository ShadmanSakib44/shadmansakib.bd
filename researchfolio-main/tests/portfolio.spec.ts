import { test, expect } from "@playwright/test";

test.describe("Portfolio", () => {
  test("about page has hero and sections", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: "Shadman Sakib" })).toBeVisible();
    await expect(page.getByText("Software Engineer")).toBeVisible();
    await expect(page.getByRole("heading", { name: "selected publications" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "technical skills" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "professional experience" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "education" })).toBeVisible();
  });

  test("navbar links work", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "publications" }).click();
    await expect(page).toHaveURL("/publications");
    await expect(page.getByRole("heading", { name: "Publications" })).toBeVisible();

    await page.getByRole("link", { name: "projects" }).click();
    await expect(page).toHaveURL("/projects");
    await expect(page.getByRole("heading", { name: "Projects" })).toBeVisible();

    await page.getByRole("link", { name: "about" }).click();
    await expect(page).toHaveURL("/");
  });

  test("resume link opens PDF in new tab", async ({ page, context }) => {
    await page.goto("/");
    const [newPage] = await Promise.all([
      context.waitForEvent("page"),
      page.getByRole("link", { name: "resume" }).click(),
    ]);
    await expect(newPage).toHaveURL(/\.pdf$/);
    await newPage.close();
  });

  test("publications page lists papers", async ({ page }) => {
    await page.goto("/publications");
    await expect(
      page.getByRole("link", {
        name: /From Chat to Checkup.*Diabetes Prediction/,
      })
    ).toBeVisible();
    await expect(
      page.getByText(/From Reviews to Requirements.*User Stories/)
    ).toBeVisible();
  });

  test("projects page lists projects with GitHub links", async ({ page }) => {
    await page.goto("/projects");
    await expect(
      page.getByRole("heading", { name: /Facial Text Emotion Detector/ })
    ).toBeVisible();
    await expect(page.getByText("EduCast")).toBeVisible();
    await expect(page.getByText("ResuMetrics")).toBeVisible();
    await expect(
      page.getByRole("link", { name: "View on GitHub →" }).first()
    ).toBeVisible();
  });

  test("footer has links", async ({ page }) => {
    await page.goto("/");
    const footer = page.locator("footer").or(page.getByRole("contentinfo")).or(page.locator("small").filter({ hasText: "Shadman Sakib" }).locator(".."));
    await expect(page.getByText("©").filter({ hasText: "Shadman Sakib" })).toBeVisible();
    await expect(page.getByRole("link", { name: "about" }).last()).toBeVisible();
    await expect(page.getByRole("link", { name: "publications" }).last()).toBeVisible();
    await expect(page.getByRole("link", { name: "projects" }).last()).toBeVisible();
    await expect(page.getByRole("link", { name: "resume" }).last()).toBeVisible();
  });
});
