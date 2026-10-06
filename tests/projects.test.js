import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { projects, getProject } from '../src/content/projects.js';

test('project registry provides unique safe routes and real preview assets', () => {
  assert.equal(new Set(projects.map((project) => project.slug)).size, projects.length);
  for (const project of projects) {
    assert.match(project.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.equal(getProject(project.slug), project);
    assert.ok(existsSync(new URL(`../public${project.preview}`, import.meta.url)));
    assert.ok(project.previewAlt.includes('demo data'));
  }
});

test('unknown, malformed and inherited property names cannot resolve as projects', () => {
  for (const slug of ['missing', '__proto__', 'constructor', '../', undefined]) {
    assert.equal(getProject(slug), undefined);
  }
});
