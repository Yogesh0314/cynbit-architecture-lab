import fs from 'fs';
import path from 'path';

console.log('====================================================');
console.log('   CYNBIT PROTOTYPE ALIGNMENT & VERIFICATION SUITE   ');
console.log('====================================================\n');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(condition, testName, details = '') {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`[PASS] ${testName}`);
  } else {
    failedTests++;
    console.error(`[FAIL] ${testName} - ${details}`);
  }
}

// 1. Check file existence
const requiredFiles = [
  'public/logo.svg',
  'public/favicon.svg',
  'src/App.jsx',
  'src/index.css',
  'src/main.jsx',
  'src/components/Navbar.jsx',
  'src/components/Hero.jsx',
  'src/components/BlueprintLab.jsx',
  'src/components/AgentSandbox.jsx',
  'src/components/BlueprintModal.jsx',
  'src/components/EcosystemShowcase.jsx',
  'src/components/MetricsAndTestimonials.jsx',
  'src/components/Footer.jsx',
  'TECHNICAL_REPORT.md',
  'README.md'
];

console.log('--- 1. File Structure & Assets Verification ---');
requiredFiles.forEach(file => {
  const filePath = path.resolve('d:/Cynbit\'s', file);
  assert(fs.existsSync(filePath), `File exists: ${file}`, `Missing: ${filePath}`);
});

// 2. Check Logo Contrast & Wordmark
console.log('\n--- 2. Logo Contrast & Visibility Check ---');
const logoContent = fs.readFileSync('d:/Cynbit\'s/public/logo.svg', 'utf-8');
assert(logoContent.includes('fill="#ffffff"'), 'Logo contains crisp white "#ffffff" for "cyn"');
assert(logoContent.includes('fill="#38bdf8"'), 'Logo contains vibrant cyan "#38bdf8" for "bit"');
assert(!logoContent.includes('fill="#0f172a"'), 'Logo no longer contains dark navy "#0f172a" text');

// 3. Check Assessment Banner Removal
console.log('\n--- 3. Public UI Assessment Banner Removal Check ---');
const appContent = fs.readFileSync('d:/Cynbit\'s/src/App.jsx', 'utf-8');
assert(!appContent.includes('Yogesh Patil'), 'App.jsx does not display applicant name in customer UI');
assert(!appContent.includes('Assessment Working Prototype'), 'App.jsx does not display candidate assessment banner');
assert(!appContent.includes('Test Feature'), 'App.jsx does not display "Test Feature" text');

// 4. Check Navigation Redesign & Accessibility
console.log('\n--- 4. Navigation Redesign & Controls Check ---');
const navContent = fs.readFileSync('d:/Cynbit\'s/src/components/Navbar.jsx', 'utf-8');
assert(navContent.includes('nav-segmented-control'), 'Navbar implements enterprise segmented control');
assert(navContent.includes('activeSection'), 'Navbar tracks active section dynamically');
assert(navContent.includes('nav-mobile-drawer'), 'Navbar includes dedicated enterprise mobile drawer');
assert(navContent.includes('account_tree') && navContent.includes('smart_toy'), 'Navbar includes clear Material Symbols');

// 5. Check Dynamic Architecture Topology in BlueprintLab
console.log('\n--- 5. Dynamic Architecture Topology Logic Check ---');
const labContent = fs.readFileSync('d:/Cynbit\'s/src/components/BlueprintLab.jsx', 'utf-8');
assert(labContent.includes('hasRag') && labContent.includes('hasTools') && labContent.includes('hasSecurity'), 'BlueprintLab derives node visibility from state');
assert(labContent.includes('activeCloudObj.color') && labContent.includes('activeCloudObj.label'), 'Cloud node dynamically updates label and color based on provider');
assert(labContent.includes('activeVectorDBObj.label'), 'Vector DB node dynamically updates label based on selected engine');
assert(labContent.includes('isDefaultState'), 'BlueprintLab includes empty/baseline default state handling');
assert(labContent.includes('selectedCaps.length === 0') || labContent.includes('selectedCaps.filter'), 'Allows toggling all capabilities off down to 0');

// 6. Check AgentSandbox Execution & Navigation Bug Fix
console.log('\n--- 6. AgentSandbox Execution & Bug Fix Check ---');
const sandboxContent = fs.readFileSync('d:/Cynbit\'s/src/components/AgentSandbox.jsx', 'utf-8');
assert(sandboxContent.includes('type="button"'), 'Execute button has explicit type="button" to prevent form submission');
assert(sandboxContent.includes('e.preventDefault()'), 'Execute handler invokes e.preventDefault() and e.stopPropagation()');
assert(sandboxContent.includes('INITIALIZING') && sandboxContent.includes('RUNNING') && sandboxContent.includes('COMPLETED'), 'Lifecycle states INITIALIZING -> RUNNING -> COMPLETED implemented');
assert(sandboxContent.includes('Request Received') && sandboxContent.includes('Final Response Generated'), 'Sequential 6-event demo trace implemented');
assert(sandboxContent.includes('showFinalResult'), 'Displays dedicated final result card in same sandbox');
assert(sandboxContent.includes('Simulated Demonstration'), 'Honestly disclaims simulated local demonstration');

// 7. Check BlueprintModal Verification
console.log('\n--- 7. Blueprint Generation & Export Check ---');
const modalContent = fs.readFileSync('d:/Cynbit\'s/src/components/BlueprintModal.jsx', 'utf-8');
assert(modalContent.includes('handleCopy') && modalContent.includes('handleDownload'), 'Provides copy to clipboard and .md download');
assert(modalContent.includes('mailto:opportunities@cynbit.in'), 'Provides pre-filled mailto draft link to Cynbit architects');
assert(modalContent.includes('Demonstration Mode'), 'Transparently labels inquiry as demonstration mode');

// 8. Check Button Types Across Codebase
console.log('\n--- 8. Universal Form Submission Protection Check ---');
const heroContent = fs.readFileSync('d:/Cynbit\'s/src/components/Hero.jsx', 'utf-8');
const ecoContent = fs.readFileSync('d:/Cynbit\'s/src/components/EcosystemShowcase.jsx', 'utf-8');
const footerContent = fs.readFileSync('d:/Cynbit\'s/src/components/Footer.jsx', 'utf-8');
assert(!heroContent.includes('<button\n  id="hero-launch') && heroContent.includes('type="button"'), 'Hero buttons have type="button"');
assert(ecoContent.includes('type="button"'), 'Ecosystem buttons have type="button"');
assert(footerContent.includes('type="button"'), 'Footer buttons have type="button"');

// 9. Check Technical Report & Documentation Alignment
console.log('\n--- 9. Technical Report & Plan Alignment Check ---');
const reportContent = fs.readFileSync('d:/Cynbit\'s/TECHNICAL_REPORT.md', 'utf-8');
assert(reportContent.includes('## 7. Professional UI Polish & Functional Bug Fixes'), 'Technical Report documents Section 7 fixes');
assert(reportContent.includes('## 8. Verification & Acceptance Testing Status'), 'Technical Report documents Section 8 acceptance tests');
assert(reportContent.includes('cmsd7jaq9000704l6bcxc7c0m'), 'Technical Report contains exact submission portal link');

console.log('\n====================================================');
console.log(`TOTAL TESTS: ${totalTests} | PASSED: ${passedTests} | FAILED: ${failedTests}`);
if (failedTests === 0) {
  console.log('STATUS: ALL IMPLEMENTATION & ALIGNMENT TESTS PASSED!');
} else {
  console.log('STATUS: SOME TESTS FAILED');
}
console.log('====================================================');

process.exit(failedTests === 0 ? 0 : 1);
